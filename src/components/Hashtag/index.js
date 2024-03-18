import React from 'react';
//Styles
import { Wrapper, Button } from './Hashtag.styles';

const Hashtag = ({ name, value, text, onClick, active, hidden, disabled, style }) => (
    <Wrapper>
        {
            (disabled == 'true') ?
                <Button type={'button'} className={ 'disabled' }
                style={{display: (hidden == 'true') ? 'none' : 'block' }} >
                    {text}
                </Button>
            :
                <Button type={'button'} name={name} value={value} text={text} onClick={onClick} className={ `${(active == 'true') ? 'hover hashtagActive' : 'hover'}`}
                style={{display: (hidden == 'true') ? 'none' : 'block' }} >
                    {text}
                </Button>
        }
    </Wrapper>
);

export default Hashtag;