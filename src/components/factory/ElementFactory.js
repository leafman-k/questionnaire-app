import React from 'react'
import TextElement from '../element/TextElement'
import DropdownElement from '../element/DropdownElement'
import RadioElement from '../element/RadioElement'

class ElementFactory {

  static build(data, onChange, key, error) {
        switch (data.type) {
            case 'text':
                return <TextElement elementData={data} onchange={onChange} key={key} error={error}/>;
            case 'dropdown':
                return <DropdownElement elementData={data} onchange={onChange} key={key} error={error}/>;
            case 'radio':
                return <RadioElement elementData={data} onchange={onChange} key={key} error={error}/>;
            default:
                return undefined;
        }
    }
}
export default ElementFactory
