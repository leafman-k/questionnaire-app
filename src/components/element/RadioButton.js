import React from 'react'
import PropTypes from 'prop-types'

const RadioButton = ({option, elementData, onchange}) => {
  let checked = false
  if(option.value === elementData.answer){
    checked = true
  }
  return (
    <label className="radio-inline"><input type="radio" name={elementData.questionId} value={option.value} onChange={onchange} checked={checked}/>{option.text}</label>
  )
}
RadioButton.propTypes ={
  option: PropTypes.object.isRequired,
  elementData: PropTypes.object.isRequired,
  onchange: PropTypes.func.isRequired,
}
export default RadioButton
