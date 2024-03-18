import styled from 'styled-components';

export const Wrapper = styled.div`
/* Settings */
.settings-wrapper {
width: 100%;
left: 50%;
transform: translateX(-50%);
position: relative;
border-radius:3px;
overflow:hidden;
background-color: var(--color-bg-2);
box-shadow: var(--box-shadow-1);
}
h2 {
text-align:center;
display: block;
font-size: 18px;
padding: 16px;
color: var(--color-5);
}
button {
    font-size: var(--fontSmall);
}
.successTrue {
    color: green;
}
.successFalse {
    color: red;
}
.settings-content {
margin:auto;
display:block;
width:100%;
max-width:var(--mediumWidth);
padding:12px;
border:1px solid;
border-color: var(--color-border-3);
color: var(--color-5);
}
.settings-content form {
margin-bottom: 16px;
margin-top: 16px;
padding:0px;
}
.settings-row {
width:100%;
display:inline-block;
margin-bottom:12px;
}
#updateUsername {
    cursor: not-allowed;
}
.settings-row input{
    width: 100%;
    heigt:40px;
    border: 1px solid var(--color-border-3);
    border-radius: 3px;
    margin: 0;
    padding: 10px;
    background: var(--color-bg-3)
}
.settings-row aside {
margin:6px 0;
}
.settings-change {
width:100%;
display:inline-block;
}
.settings-user-img-button {
text-align:left;
border:none;
padding:0;
color: var(--color-1);
background-color: var(--color-bg-0);

    :hover {
        opacity:0.75;
    }
}
.settings-user-img {
width:50px;
height:50px;
border-radius:100%;
}
.settings-username {
font-size:20px;
}
/* Settings END */
    `;