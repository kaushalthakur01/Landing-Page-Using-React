import React, { useEffect, useState } from 'react';
import '../styles/TopScroller.css';
import { FaArrowUp } from 'react-icons/fa';



const ScrollTop = () => {

    const [isVisible,setIsVisible] = useState(false);
    const goToBtn = () =>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }

    const listenToScroll = (()=>{
        let heightToHidden = 70;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        console.log("winScroll= ",winScroll);

        if(winScroll > heightToHidden){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    });

    useEffect(()=>{
        window.addEventListener("scroll",listenToScroll);
        return () => window.removeEventListener("scroll",listenToScroll);
    },[]);

  return (
    <>
            {
            isVisible &&(
                <div className='top-btn' onClick={goToBtn}>
                    <FaArrowUp className='top-btn--icon' />
                </div>
            )
            };
    </>
  );
};



export default ScrollTop