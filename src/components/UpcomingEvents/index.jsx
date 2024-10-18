import { UpcomingEventsBgImage, } from '../../pages/InitialHome/styledComponent'
import { IoLocationSharp } from "react-icons/io5";

import './index.css'
const UpcomingEvents = ({ event }) => {
    const {cityName, date, wether, distanceKm, imgUrl} = event
  return (
    <li className='upcoming-event-item subtitle'>
      <UpcomingEventsBgImage bgImage='https://res.cloudinary.com/dywnwbcln/image/upload/v1725453277/jc7upulyrcqvkokmw8go.webp'>
        <div className='date-container'>
        <h3 className="card-heading">{ new Date(event.date).toLocaleDateString('en-IN', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                            })}</h3>
        </div>
      </UpcomingEventsBgImage>
      <h3 className='heading'>
        After note nearly
      </h3>
      <div className='location-distance-div'>
        <div className='location-container'>
            <IoLocationSharp className='icons-style' />
            <span className="card-para">
                {event.cityName}
            </span>
        </div>
        <p className="card-para"><span>{event.weather}</span> | <span>{Math.floor(event.distanceKm / 1) }</span> km</p>
      </div>
    </li>
  )
}

export default UpcomingEvents
