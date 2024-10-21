import {useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import Cookies  from "js-cookie";
import {v4 as uuidV4} from "uuid";
import {TailSpin} from 'react-loader-spinner'
import { IoReorderThree, IoLocationSharp, IoSearch, IoHeart } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import RecommendedEvents from '../../components/RecommendedEvents'
import UpcomingEvents from "../../components/UpcomingEvents"

import './index.css';

const categories = [
    {
        id: uuidV4(),
        name: "Live shows",
    },
    {
        id: uuidV4(),
        name: "Streams",
    },
    {
        id: uuidV4(),
        name: "Movies",
    },
    {
        id: uuidV4(),
        name: "Plays",
    },
    {
        id: uuidV4(),
        name: "Events Sports",
    },
    {
        id: uuidV4(),
        name: "Sports",
    },
    {
        id: uuidV4(),
        name: "Activities",
    }
]

let isLogin = false

const InitialHome = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(isLogin)
    const [recommendedEvents, setRecommendedEvents] = useState([])
    const [recommendedLoading, setRecommendedLoading] = useState(false)
    const [upcomingEvents, SetUpcomingEvents] = useState([])
    const [upcomingLoading, setUpcomingLoading] = useState(false)
    const navigate = useNavigate();

    // useEffect( () => {
    //     const getRecommendedEvents = async () => {
    //         setRecommendedLoading(true)
    //         // const response = await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco")
    //         if(response.ok){
    //             const data = await response.json()
    //             const updatedEvents = data.events.map(event => {
    //                 const fileId = event.imgUrl.match(/\/d\/(.+)\//)[1]
    //                  return {
    //                    ...event,
    //                    imgUrl: `https://drive.google.com/thumbnail?id=${fileId}`,
    //                  }
    //                })         
    //             setRecommendedEvents(updatedEvents)
    //             setRecommendedLoading(false)
    //         }            
    //     }
    //     getRecommendedEvents()
        
    // }, [])

    // useEffect(() => {
    //     const getUpcomingEvents = async () => {
    //         setUpcomingLoading(true)
    //         // const response = await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming")
    //         if(response.ok){
    //             const data = await response.json()
    //             const updatedEvents = data.events.map(event => {
    //                 const fileId = event.imgUrl.match(/\/d\/(.+)\//)[1]
    //                  return {
    //                    ...event,
    //                    imgUrl: `https://drive.google.com/thumbnail?id=${fileId}`,
    //                  }
    //                }) 
    //             SetUpcomingEvents(updatedEvents)
    //             setUpcomingLoading(false)
    //         }            
    //     }
    //     getUpcomingEvents()
    // }, [])

    const onClickSignUp = () => {
        navigate('/signup');
    }

    const onClickLogout = () => {
        Cookies.remove("jwt_token")
        isLogin = false
        navigate('/login');
    }

    const token = Cookies.get("jwt_token")
    if (token) {
        isLogin = true
    }

    const renderEventsCategories = () => {
        return (
            <ul className='categories-list'>
                {categories.map((category) => {
                    return (
                        <li key={category.id} className="category-item ">
                            <button className="category-button subtitle" type="button">{category.name}</button>
                        </li>
                    )
                })}
            </ul>
        )
    }

    const renderRecommendedEvents = () => {
        return (
            <ul className="recommended-list subtitle">
                {recommendedLoading ? (<>{renderLoadingView()}</>): (<>
                    {recommendedEvents.map((event) => (
                    <RecommendedEvents key={event.eventName} event={event} />
                ))}
                </>)}
            </ul>
        )
    }

    const renderUpcomingEvents = () => {
        return (
            <div className="upcoming-events-container">
                <div className="title-button-div">
                    <h3 className="upcoming-events-title heading">Upcoming Events</h3>
                    <button className="see-all-button"><a className="a"  href="">See all</a> </button>
                </div>
                <ul className="upcoming-events-list">
                    {upcomingLoading ? (<>{renderLoadingView()}</>): (<>
                        {upcomingEvents.map((event) => (
                        <UpcomingEvents key={event.eventName} event={event} />
                    ))}
                    </>)}
                </ul>
            </div>
        )
    }

    const renderLoadingView = () => {
        return(
            <div className="loader-container">
                    <TailSpin
                        height="80"
                        width="80"
                        color="#f542ef"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
        )
    }
    
    return (
        <div className="initial-home">
            {/* mobile view header */}
            <header className='header-bg'>
                <div className="non-categories-container">
                <div className='m-logo-location-container'>
                    <p className='m-logo-name'>BookUsNow</p>
                    {/* location */}
                    <div className='location-container'>
                        <IoLocationSharp className='icons-style' />
                        <span className="common-para-1 subtitle">
                            Mumbai, India
                        </span>
                        <IoIosArrowForward className="icons-style" />
                    </div>
                </div>
                <div className="search-like-login-container">
                    <div className='search-container '>
                        <input type='text' className="search-input"/>
                        <IoSearch className="icons-style" />
                    </div>
                    <button className="icons-button like-button">
                        <IoHeart className="icons-style" />
                    </button>
                    {isLoggedIn ? (
                    <>
                        <button onClick={onClickLogout} className="sign-up-button boarder subtitle">
                        Logout
                    </button>
                    </>):(
                    <button onClick={onClickSignUp} className="sign-up-button boarder subtitle">
                        Signup
                    </button>) }
                </div>
                </div>
                {renderEventsCategories()}
            </header>
            {/* Desktop header  */}
            <header className="desktop-header">
            <div className='logo-location-container desktop-logo-location-container'>
                    <h1 className='logo-name'>BookUsNow</h1>
                    <div className='location-container'>
                        <IoLocationSharp className='icons-style' />
                        <span className="common-para-1 subtitle">
                            Mumbai, India
                        </span>
                        <IoIosArrowForward className="icons-style" />
                    </div>
                </div>
                <div className="categories-input-favorites-signin-container">
                    <div className="input-favorites-signin-container">
                        <button className="categories-button" type="button">
                            <IoReorderThree className="three-bars" />
                            Categories
                        </button>
                        <div className='search-container-desktop boarder'>
                            <input type='text' placeholder='DJI phantom' className="search-input"/>
                            <IoSearch className="icons-style" />
                        </div>
                        <button className="icons-button like-button d-icon-button">
                            <IoHeart className="icons-style three-bars" />
                             Favorites
                        </button>
                        {isLoggedIn ? (
                        <>
                            <button onClick={onClickLogout} className="sign-up-button boarder subtitle">
                                Logout
                            </button>
                        </>):(
                        <button onClick={onClickSignUp} className="sign-up-button boarder subtitle">
                            Signup
                        </button>) }
                    </div>
                    <div className="categories-list-container">
                        {renderEventsCategories()}
                    </div>
                </div>
            </header>
            <div className="bg-image">
                <div className="overlay">
                <div className="content">
                    <h1 className="main-heading">
                        Discover Exciting Events Happening Near You - Stay Tuned for Updates!
                    </h1>
                    <p className="main-para">
                        Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Vulputate libero et velit interdum, ac
                    </p>
                </div>
                </div> 
            </div>
            <div className="re-up-events">
                <div className="recommended-shows-container">
                    <div className="title-button-div">
                        <h3 className="recommended-shows-title">Recommended Shows <span className="left-arrow"> &rarr; </span> </h3>
                        <button className="see-all-button"><a className="" href="">See all</a> </button>
                    </div>
                    {renderRecommendedEvents()}                
                </div>
                {renderUpcomingEvents()}
            </div>
        </div>
    );
}

export default InitialHome;