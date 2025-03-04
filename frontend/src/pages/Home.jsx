import React from "react"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='h-screen bg-cover bg-left bg-[url(https://images.pexels.com/photos/147430/pexels-photo-147430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] pt-8 flex justify-between flex-col w-full'>
      <img  className = 'w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-[30px] font-bold">Get started with uber</h2>
          <Link to='login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
