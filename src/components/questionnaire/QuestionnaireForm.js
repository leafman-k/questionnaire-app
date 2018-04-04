import React from 'react'
import PropTypes from 'prop-types'
import ElementFactory from '../factory/ElementFactory'

const QuestionnaireForm = ({questions, onchange, error}) => {
  return (
    <div className="row">
      <div className="col-sm-offset-3 col-sm-6">
        {questions.map((question, key) => ElementFactory.build(question, onchange, key, error ))}
      </div>
    </div>
  )
}
QuestionnaireForm.proptypes ={
  questions: PropTypes.array.isRequired,
  onchange: PropTypes.func.isRequired
}
export default QuestionnaireForm
