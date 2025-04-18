import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const CaptainRiding = () => {

  const [FinishRidePanel, setFinishRidePanel] = useState(false);
  const FinishRidePanelRef = useRef(null);


  useGSAP(
    () =>{
      if (FinishRidePanel) {
        gsap.to(FinishRidePanelRef.current, {
          transform: "translateY(0)",
          duration: 0.5,
        });
      } else {
        gsap.to(FinishRidePanelRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
        });
      }
    },
    [FinishRidePanel]
  );
  return (
    <div className="h-screen">
      
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/5 p-8 flex items-center justify-between relative bg-yellow-400"
        onClick={()=>{
          setFinishRidePanel(true)
        }}>
      <h5
        className="p-1 text-center absolute top-0 w-[93%] "
        onClick={() => {
         
        }}
      >
        <i className="text-3xl text-black ri-arrow-up-wide-line"></i>
      </h5>
        <h4 className='text-xl font-semibold'>4Km Away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg ">Complete Ride</button>
      </div>
        
      <div ref={FinishRidePanelRef} className="fixed w-full z-10 translate-y-full bottom-0  px-3 py-10 pt-12 bg-white  ">
        <FinishRide setFinishRidePanel ={setFinishRidePanel} />
      </div>
    </div>
  )
}

export default CaptainRiding