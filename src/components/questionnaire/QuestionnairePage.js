import React, { Component } from 'react';
import QuestionnaireForm from './QuestionnaireForm'
import questionnaireApi from '../../api/mockQuestionnaireApi'
import toastr from 'toastr'
class QuestionnairePage extends Component{

  constructor(props){
    super(props)
    this.state = {
      questionnaire: {},
      currentPage: {},
      pageIndex: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
  }
  componentDidMount(){
    questionnaireApi.getQuestionnaireById(1).then(questionnaire => {
      this.setState({questionnaire:  Object.assign({},questionnaire), currentPage: questionnaire.pages[0]})
      console.log('Page:' + Object.values(questionnaire.pages[0]))
    }).catch(error =>{
      toastr.error(error)
    })
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
      <div>
      <h1>Questionnaire app</h1>
        <h3>{page.descriptions}</h3>
      <QuestionnaireForm page={page}/>
      <button onClick={this.previousPage}>Previous</button>
      <button onClick={this.nextPage}>Next</button>
      </div>
    )
  }
}

export default QuestionnairePage
