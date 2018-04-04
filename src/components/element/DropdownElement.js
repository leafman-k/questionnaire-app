import React from 'react'
import PropTypes from 'prop-types'
const DropdownElement = ({elementData, onchange, error}) => {

  return (
    <div className="form-group">
    <label htmlFor={elementData.questionId}>{elementData.question}</label>
    <div className="field">
      <select
        name={elementData.questionId}
        value={elementData.answer}
        onChange={onchange}
        className="form-control">
        <option value=""></option>
        {elementData.options.map((option) =>{
          return <option key={option.value} value={option.value}>{option.text}</option>
        })
        }
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  </div>
  )
}
DropdownElement.propTypes = {
  elementData: PropTypes.object.isRequired,
  onchange: PropTypes.func.isRequired,
  error: PropTypes.string
}
export default DropdownElement
