import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%] "
        onClick={() => {
          props.waitingForDriver(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <div className="flex items-center jusify-between">
      <img
          className="h-10"
          src="https://swyft.pl/wp-content/uploads/2023/05/can-1-person-use-uberx.jpg"
          alt=""
        />
        <div>
          <h2 className="text-lg font-medium">Sarthak</h2>
          <h4 className="text-xl font-semibold -mt1 -mb1">MP 04 AB 2034</h4>
          <p className="text-sm text-gray-600">Hyundai Verna</p>
        </div>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
       
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 border-b-2 border=gray-100 p-3">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className=" tex-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahemdabad
              </p>
            </div>
          </div>
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
    </div>
  );
};

export default WaitingForDriver;
