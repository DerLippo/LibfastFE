import styled from 'styled-components';

export const ProfileHeader = styled.div`
display:block;
width:100%;
`;

export const ProfileLevelbar = styled.div `
    margin:auto;
    width: 100%;
    padding: var(--padding-all);

    .profile-levelbar {
    width: 100%;
    height: 40px;
    position: relative;
    border-radius: 6px;
    border:2px solid;
    border-color: var(--color-border-1);
    overflow:hidden;
    }
    .profile-levelbar-progress {
    height: 110%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background: var(--color-bg-1);
    margin-left:-1px;
    }
    .profile-levelbar-informations {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    width: 100%;
    font-weight: 500;
    font-size: var(--fontSmall);
    }
    .profile-levelbar-level {
    height: 100%;
    position:absolute;
    display: inline-table;
    left:5%;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-5);
    font-weight: 500;
    font-size: var(--fontSmall);
    }
    .profile-levelbar-text {
    height: 100%;
    position:absolute;
    display: inline-table;
    right:5%;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-5);
    }
`;

export const ProfileBody = styled.div`
display:block;
width:100%;

    
.profile-informations-wrapper {
    float:left;
    width:100%;
    }
    .profile-informations-row {
    width:100%;
    display: inline-block;
    }
    .profile-informations-container {
    display:inline-block;
    width: 100%;
    max-width: 100%;
    padding: var(--padding-all);
    overflow:hidden;
    background: var(--color-bg-2);
    vertical-align: top;
    border-top: 2px solid;
    border-color: var(--color-border-3);
    }
    .profile-informations-amount-container {
    display: inline-block;
    text-align: center;
    vertical-align:top;
    padding:9px;
    }
    .profile-informations-amount {
    font-size: var(--fontMed);
    font-weight: 500;
    color: var(--color-5);
    }
    .profile-informations-amount-title {
    font-size: var(--fontSmall);
    font-weight: 500;
    color: var(--color-4);
    }
`;

export const ProfileBodySwitch = styled.div`
display:block;
width:100%;
padding: var(--padding-all);
background: var(--color-bg-2);
border-top: 2px solid;
border-bottom: 2px solid;
border-color: var(--color-border-3);
text-align:center;

    div {
        display:inline-block;
        padding: var(--padding-all);
    }

    span {
        cursor:pointer;
        font-size: var(--fontMed);
        font-weight: 500;
        color: var(--color-4);
    }

    .active {
        color: var(--color-5);
        border-bottom:2px solid;
        border-color: var(--color-border-5);
    }

`;

export const UserImage = styled.div`
display:block;
margin:auto;
text-align:center;
width:100%;
height:100%;
max-width: 250px;
max-height: 250px;
overflow: hidden;
`;

export const Wrapper = styled.div`
/* Profile  */
.profile {
    cursor:default;
    width: 100%;
    min-height:400px;
    position: relative;
    }
    .profile-right {
    width: 100%;
    max-width: var(--maxWidth);
    margin-top:0px;
    display:inline-block;
    vertical-align:top;
    }
    .profile-header {
    width:100%;
    padding: var(--padding-all);
    overflow:hidden;
    background: var(--color-bg-2);
    }
    .profile-img {
    margin: auto;
    width:200px;
    height:200px;
    border-radius: 100%;
    }
    .profile-username {
        text-align:center;
        margin-top:25px;
        font-size:var(--fontBig);
    }
    .userVerifiedIcon {
        width:26px;
        margin:2px;
    }
    .profile-settings-img-upload {
    width:100%;
    margin-top:25px;
    }
    /* Profile END */
    `;