import React from 'react';
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DliveryMeals from '../Assets/delivery-image.png';

const Work = () => {

    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Explore a wide range of meal options from your favorite restaurants. Whether you're in the mood for a hearty we have something to satisfy every craving. Start picking your meals now!",
        },
        {
            image: ChooseMeals,
            title: "Choose Meals",
            text: "Select your preferred dishes from our curated menu. Customize your order with special instructions or dietary preferences. Enjoy a variety of choices that cater to all tastes and needs.",
        },
        {
            image: DliveryMeals,
            title: "Dlivery Meals",
            text: "Experience seamless delivery right to your doorstep. Our efficient delivery service ensures your meals arrive fresh and on time. Sit back and relax while we bring delicious food straight to you.",
        }
    ]

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>
            Simply browse our diverse menu to pick your favorite meals,
             customize your choices to match your preferences, and then
              relax while we handle the delivery. Our efficient service 
              ensures your selected dishes arrive fresh and on time, making 
              ordering food easy and enjoyable.
            </p>
        </div>
        <div className='work-section-bottom'>
            {
                workInfoData.map((data)=>(
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt='' />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work