import styled from "styled-components";

export const Wrapper = styled.div`
button {
margin:auto;
display:inline-block;
margin: var(--margin-left-right);
margin-top:12px;
background: var(--color-bg-1);
color: var(--color-2);
}

input, textarea {
background: var(--color-bg-2);
border:2px solid;
border-color: var(--color-border-1);
border-radius:6px;
padding:12px;
}

textarea {
resize: vertical;
}

span {
    display:block;
    color: var(--color-4);
    margin-left:12px;
    margin-top:6px;
    font-size: var(--fontSmall);
}

.reportIcon {
cursor:pointer;
color: var(--color-8) !important;
font-size: var(--fontMed);
position: relative;
float: right;

    :hover, :focus {
        opacity:0.5;
    }
}

.moderationBoxWrapper {
    text-align:center;
    width:101vw;
    height:101vh;
    background: var(--color-bg-1);
    padding: var(--padding-all);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:1000;
    display:none;
    overflow:hidden;
    cursor:default;
}
.moderationBoxWrapperActive {
    display:block !important;
}

.moderationBox {
    text-align:center;
    margin:auto;
    width:95%;
    max-width: var(--mediumWidth);
    min-height:150px;
    background: var(--color-bg-2);
    box-shadow: var(--box-shadow-1);
    border-radius:12px;
    padding: var(--padding-all);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:1001;
}

/* Dropdown */
.dropdownModeration {
    position: relative;
    display: flex;
    float: right;
    margin: 10px;
    margin-top:0px;
}

span {
    font-size: var(--fontMed);
    cursor:pointer;
    color: var(--color-4);
    vertical-align:top;

    .fa-ellipsis {
        font-size: var(--fontBig);
    }
}

  .dropdownModeration-content {
    display: none;
    position: absolute;
    background: var(--color-bg-2);
    min-width: 160px;
    box-shadow: var(--box-shadow-1);
    z-index: 1;
    right:0px;
    border-radius:6px;

    div {
        width:100%;
        padding: 12px 8px;
        cursor:pointer;
        color:var(--color-5);
        background:var(--color-bg-2);
        font-size: var(--fontSmall);
        border-radius:6px;
        box-shadow: var(--box-shadow-1);
    }
    div:hover {
        opacity:0.75;
        background: var(--color-bg-3);
    }
  }
  
  .dropdownModeration:hover .dropdownModeration-content {
    display: block;
  }
/* Dropdown End */
`;