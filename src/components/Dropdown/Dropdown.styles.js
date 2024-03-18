import styled from 'styled-components';

export const Wrapper = styled.div`
display:inline-block;

/* Dropdown */
.dropdown {
    position: relative;
    display: inline-block;
}

span {
    font-size: var(--fontMed);
    cursor:pointer;
    color: var(--color-4);
    margin:0px;
    padding:0px;

    .hashtagIcon {
        font-size: var(--fontBig);
    }
}

  .dropdown-content {
    display: none;
    position: absolute;
    background: var(--color-bg-2);
    width: 240px;
    max-height:60vh;
    box-shadow: var(--box-shadow-1);
    z-index: 100000;
    right:0px;
    border-radius:6px;
    overflow-y:scroll;

    div {
        display:block;
        margin:0px;
        padding:0px;
    }
    button {
        width:100%;
        margin:0px;
        border-radius:0px;
        background:var(--color-bg-2);
        color:var(--color-5);
        text-align:left;
        font-weight:600;
        font-size:var(--fontSmall);
    }
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
/* Dropdown End */

`