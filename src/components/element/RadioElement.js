import React from 'react'
import PropTypes from 'prop-types'
import RadioButton from './RadioButton'

const RadioElement = ({elementData, onchange, error}) => {

  return (
    <div className="form-group">
    <label htmlFor={elementData.questionId}>{elementData.question}</label>
    <br/>
    {elementData.options.map((option, index) =>{
      return <RadioButton option={option} elementData={elementData} onchange={onchange} key={index}/>
    }
    )}
    </div>
  )
}
RadioElement.propTypes = {
  elementData: PropTypes.object.isRequired,
  onchange: PropTypes.func.isRequired,
  error: PropTypes.string
}
export default RadioElement
