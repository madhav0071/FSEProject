import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%] "
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available !</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400  rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12  object-cover rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUueKMdnTNO_ItCNq3y606v5XXTSbTibol2Q&s"
            alt=""
          />
          <h2 className="text-lg font-medium">Harsi Pateliya</h2>
        </div>
        <h5>2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 border-b-2 border=gray-100 p-3">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">127/07-B</h3>
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
                Royal Palace, Gujrat
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
        <div className=" mt-5 w-full flex items-center justify-between">
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className="  mt-1 bg-gray-300 text-gray-800 fomt-semibold p-3 px-10 rounded-lg "
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
            }}
            className="   bg-green-600 text-white fomt-semibold p-3 px-10 rounded-lg "
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
