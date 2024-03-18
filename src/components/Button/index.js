import React from 'react';
//Styles
import { Wrapper } from './Button.styles';

const Button = ({ name, value, text, callback, className, disabled }) => (
    <Wrapper type="button" onClick={callback} className={className} disabled={disabled} name={name} value={value}>
        {text}
    </Wrapper>
);

export default Button;