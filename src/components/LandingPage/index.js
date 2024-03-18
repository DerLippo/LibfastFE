import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMG_URL } from '../../config'
//Components
import Spinner from '../Spinner';
import GetText from '../GetText';
import PostInfo from '../PostInfo';
// Styles
import { Wrapper } from './LandingPage.styles';
//Hook
import { usePostsFetch } from '../../hooks/usePostsFetch';

const LandingPage = () => {

    const {
        state,
        loading, 
        error,
        searchFilter,
        setSearchFilter,
    } = usePostsFetch();

    if(!searchFilter) {
        setSearchFilter('landingpage');
    }
    //if(loading) return <Spinner />
    if(error) return <div>Something went wrong...</div>


    return (
        <>
            <Wrapper>
                <div className="landing_page_one">
                    <center>
                        <div className="landing_page_one-one">
                            <h1 id="landing_page_one-one-title"><b><GetText textName='landingPageWelcomeTitleOne' /></b><br></br><GetText textName='landingPageWelcomeTitleTwo' /></h1>
                            <p id="landing_page_one-one-text"><GetText textName='landing_page_welcome_text' /></p>
                        </div>
                        <img className="landing_page_one-two" src={IMG_URL + '/landingpage/landingpage_one/background.png'}/>
                    </center>
                </div>
                <div className="landing_page_two">
                    <div className="landing_page_two-one"><h2><GetText textName='landing_page_info_title' /></h2></div>
                    <center>
                        <div className="landing_page_two-two">
                            <div className="landing_page_two-two_wrapper">
                                <img src={IMG_URL + '/landingpage/landingpage_two/body1.png'} />
                                <h3><GetText textName='landing_page_info_one_title' /></h3>
                                <p><GetText textName='landing_page_info_one_text' /></p>
                            </div>
                            <div className="landing_page_two-two_wrapper">
                                <img src={IMG_URL + '/landingpage/landingpage_two/body2.png'} />
                                <h3><GetText textName='landing_page_info_two_title' /></h3>
                                <p><GetText textName='landing_page_info_two_text' /></p>
                            </div>
                            <div className="landing_page_two-two_wrapper">
                                <img src={IMG_URL + '/landingpage/landingpage_two/body3.png'} />
                                <h3><GetText textName='landing_page_info_three_title' /></h3>
                                <p><GetText textName='landing_page_info_three_text' /></p>
                            </div>
                            <div className="landing_page_two-two_wrapper">
                                <img src={IMG_URL + '/landingpage/landingpage_two/body4.png'} />
                                <h3><GetText textName='landing_page_info_four_title' /></h3>
                                <p><GetText textName='landing_page_info_four_text' /></p>
                            </div>
                        </div>
                    </center>
                </div>
                <div className="landing_page_three">
                    <center>
                        <img className="landing_page_three-one" src={IMG_URL + '/landingpage/landingpage_three/backgroundOne.png'} />
                        <div className="landing_page_three-two">
                            <h1 id="landing_page_three-two-title"><GetText textName='landingPageLevelStatsTitle' /></h1>
                            <p id="landing_page_three-two-text"><GetText textName='landingPageLevelStatsText' /></p>
                        </div>
                    </center>
                    <center>
                        <div className="landing_page_three-four">
                            <h1 id="landing_page_three-four-title"><GetText textName='landingPageTopUserTitle' /></h1>
                            <p id="landing_page_three-four-text"><GetText textName='landingPageTopUserText' /></p>
                        </div>
                        <img className="landing_page_three-three" src={IMG_URL + '/landingpage/landingpage_three/backgroundTwo.png'} />
                    </center>
                </div>
                <div className="landing_page_four">
                    <center>
                        <div className="landing_page_four-one"><h2><GetText textName='landing_page_post_title' /></h2></div>
                    {
                        (state.results) ? 
                            state.results.map(row => (
                                <div key={row.id} className='landingPagePost'>
                                    <PostInfo key={row.id} postData={row} />
                                </div>
                            ))
                        :null
                    }
                    </center>
                </div>
            </Wrapper>
        </>
    )
};

export default LandingPage;