import React from 'react';
import { Link } from 'react-router-dom';

import GetText from '../GetText';
//Styles
import { Wrapper, Button as ButtonWrapper } from './Dropdown.styles';
import Button from '../Button';

const Dropdown = ({ textName, fontAwesome, dropdownListObject }) => (

    <Wrapper>
        {
            <div className='dropdown'>
                <span>
                    {(textName != null) ? <GetText textName={textName} /> :null}
                    {(fontAwesome) ? <i className={`${fontAwesome}`} ></i> : <i class="fa-solid fa-ellipsis"></i>}

                </span>
                <div class="dropdown-content">
                    {
                        (dropdownListObject) ?
                            Object.keys(dropdownListObject).map((a) => (
                                <Link to={`${encodeURIComponent(dropdownListObject[a].linkTo)}`}>
                                    <Button key={dropdownListObject[a].id}
                                        text={dropdownListObject[a].text}
                                        hidden={ `${(dropdownListObject[a].hidden == true) ? true : false}`}
                                        disabled={ `${(dropdownListObject[a].disabled == true) ? true : false}`} />
                                </Link>
                            ))
                        :null
                    }
                </div>
            </div>
        }
    </Wrapper>    
);

export default Dropdown;