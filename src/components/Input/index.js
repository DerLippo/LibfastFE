import React from 'react';
//Styles
import { Wrapper } from './Input.styles';

const Input = ({ id, text, onChange, placeholder, type, value, name, className, autoComplete, disabled, checked, required }) => (
    
    <Wrapper id={id} type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} className={className} autoComplete={autoComplete} disabled={disabled} checked={checked} required={required}>
        {text}
    </Wrapper>
);

export default Input;