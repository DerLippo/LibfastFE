import {React} from 'react';
//Mobile Check
import {isMobile} from 'react-device-detect';
//Functions
import UserFunctions from './UserFunctions';
// Components
import CreatePost from './CreatePost';
import Login from './Login';
import Header from './Header';
import Wrapper from './Wrapper'
import Footer from './Footer';


const PostCreate = () => {

    return (
        (UserFunctions.getSessionHash()) ? (
            <>
                <Header userName={UserFunctions.getUserName()} />
                {
                    <Wrapper>
                        <CreatePost userHash={UserFunctions.getSessionHash()} />
                    </Wrapper>
                }
                {
                    (!isMobile) ? <Footer /> :null
                }
            </>
        )
        :
        (
            <><Login /></>
        )
    )
};

export default PostCreate;