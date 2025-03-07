import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "24B, Near Kappor's cafe, Pragati Vidyamandir School, Bhopal",
    "9A, Opposite Krishna Supermarket, Sunrise Apartments, Sector 12, Noida",
    "17C, Beside Green Park Hotel, Sunshine Plaza, MG Road, Bengaluru",
    "32B, Adjacent to Global Library, Harmony Complex, Shivaji Nagar, Pune",
  ];

  return (
    <div>
      {locations.map((elem, index) => (
        <div
          onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}
          key={index} // Adding a unique key
          className="flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl my-2 items-center justify-start"
        >
          <h2 className="bg-[$eee] h-8 w-12 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
