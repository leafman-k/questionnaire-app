import React, { Component } from 'react';
import QuestionnaireForm from './QuestionnaireForm'
import questionnaireApi from '../../api/mockQuestionnaireApi'
import {Button} from 'react-bootstrap'
import toastr from 'toastr'
class QuestionnairePage extends Component{

  constructor(props){
    super(props)
    this.state = {
      questionnaire: {},
      currentPage: null,
      pageIndex: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.updateAnswer = this.updateAnswer.bind(this)
  }
  componentDidMount(){
    questionnaireApi.getQuestionnaireById(1).then(questionnaire => {
      this.setState({questionnaire:  Object.assign({},questionnaire), currentPage: questionnaire.pages[0]})
      console.log('Page:' + Object.values(questionnaire.pages[0]))
    }).catch(error =>{
      toastr.error(error)
    })
  }
  updateAnswer(event){
    const field = event.target.name;
    const value = event.target.value;
    const page = Object.assign({},this.state.currentPage)
    const item = page.questions.filter(question => question.questionId === field)
    if(item){
      const question = item[0]
      question.answer = value
      const elementIndex = page.questions.findIndex(question => question.questionId === field)
      page.questions.splice(elementIndex, 1, question)
      this.setState({currentPage: page})
    }
  }
  nextPage(){
    let pageIndex = this.state.pageIndex + 1
    const nextPage = Object.assign({},this.state.questionnaire.pages[pageIndex])
    console.log('Next page: ' + Object.values(nextPage))
    this.setState({pageIndex: pageIndex, currentPage: nextPage})
  }
  previousPage(){
    let pageIndex = this.state.pageIndex - 1
    const previousPage = Object.assign({},this.state.questionnaire.pages[pageIndex])
    this.setState({pageIndex: pageIndex, currentPage: previousPage})
  }
  render() {
    const page = this.state.currentPage
    return (
      <div className="container-fluid">
      <h1>Questionnaire app</h1>
      <div className="row">
      {page && <QuestionnaireForm questions={page.questions} onchange={this.updateAnswer}/>}

      <Button bsStyle="primary" onClick={this.previousPage}>Previous</Button>
      <Button bsStyle="primary" onClick={this.nextPage}>Next</Button>
      </div>
      </div>
    )
  }
}

export default QuestionnairePage
