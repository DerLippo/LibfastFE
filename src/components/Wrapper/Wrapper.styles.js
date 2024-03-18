import styled from 'styled-components';
//Mobile Check
import {isMobile} from 'react-device-detect';


export const Wrapper = styled.div`
    width:100%;
    max-width: var(--maxWidth);
    min-height: var(--bodyHeight);
    display: flex;
    margin: auto;
    margin-top: var(--headerHeight);
    margin-bottom:10px;
`