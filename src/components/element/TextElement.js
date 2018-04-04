import React from 'react'
import PropTypes from 'prop-types'

const TextElement = ({elementData, onchange, error}) => {
  let wrapperClass = 'form-group';
if(error && error.length > 0){
  wrapperClass += ' has-error';
}
return (
  <div className={wrapperClass}>
    <label htmlFor={elementData.questionId}>{elementData.question}</label>
    <div className="field">
      <input
        type="text"
        name={elementData.questionId}
        className="form-control"
        placeholder={elementData.description}
        value={elementData.answer}
        onChange={onchange}/>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
  </div>
 )
}
TextElement.propTypes = {
  elementData: PropTypes.object.isRequired,
  onchange: PropTypes.func.isRequired,
  error: PropTypes.string
}
export default TextElement
