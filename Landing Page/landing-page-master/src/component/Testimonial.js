import React from 'react';
import ProfilePic from '../Assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary-text'>
            “Whether I'm craving comfort food or something more exotic,
            FOODIE never disappoints. The reviews and ratings 
             help me make the best choices, and the food always arrives 
             fresh and hot. It’s my go-to app for all my dining needs.”
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img width={200} src={ProfilePic} alt='' />
            <p className=''>
            “FOODIE makes ordering food so easy and convenient. 
            The user-friendly interface, coupled with real-time tracking,
             ensures I always know when my food will arrive. Plus, the
              customer support team is incredibly responsive. Highly recommend!”
            </p>
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>Kaushal Pratap Singh</h2>
        </div>
    </div>
  )
}

export default Testimonial