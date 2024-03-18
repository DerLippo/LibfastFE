import React from 'react';
//Components
import GetText from '../GetText';
//Styles
import { Wrapper } from './Textarea.styles';

const Textarea = ({ text, onChange, placeholder, type, value, name, className, onKeyUp, disabled }) => (
    
    (!value) ? (
        value = ''
    )
    :
    (
        value = value
    ),

    <Wrapper type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} className={className} onKeyUp={onKeyUp} disabled={disabled}>
        {text}
    </Wrapper>
);

export default Textarea;