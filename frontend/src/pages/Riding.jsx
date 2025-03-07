import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed top-2 right-4 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className=" text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center jusify-between">
          <img
            className="h-15"
            src="https://swyft.pl/wp-content/uploads/2023/05/can-1-person-use-uberx.jpg"
            alt=""
          />
          <div className="ml-25">
            <h2 className="text-md font-medium">Sarthak</h2>
            <h4 className="text-lg font-semibold -mt1 -mb1">MP 04 AB 2034</h4>
            <p className="text-sm text-gray-600">Hyundai Verna</p>
          </div>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 border-b-2 border=gray-100 p-3">
              <i className=" text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className=" tex-sm -mt-1 text-gray-600">
                  Kankariya Talab, Ahemdabad
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5  p-3">
              <i className="ri-currency-fill"></i>
              <div>
                <h3 className="text-lg font-medium">₹193.20</h3>
                <p className=" tex-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className=" mt-5 w-full bg-green-600 text-white fomt-semibold p-2 rounded-lg ">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
