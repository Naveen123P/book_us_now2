import {BgImage} from '../../pages/InitialHome/styledComponent'
import { IoLocationSharp } from "react-icons/io5";


const RecommendedEvents = ({event}) => {
    
    return (
        <BgImage  bgImage='https://res.cloudinary.com/dywnwbcln/image/upload/v1725455958/vfi9zqpvuxn6xl9hutn3.jpg'>
            <div className="event-details-container subtitle">
                <div className="location-div">
                    <h3 className="card-heading">Make Agree</h3>
                    <div className='location-container'>
                        <IoLocationSharp className='icons-style' />
                        <span className="card-para">
                            {event.cityName}
                        </span>
                    </div>
                </div>
                <div className="data-wether-distance-div">
                    <h3 className="card-heading">{ new Date(event.date).toLocaleDateString('en-IN', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                            })}</h3>
                    <p className="card-para"><span>{event.weather}</span> | <span>{Math.floor(event.distanceKm / 1) }</span> km</p>
                </div>
            </div>
        </BgImage>
    )     
} 

export default RecommendedEvents