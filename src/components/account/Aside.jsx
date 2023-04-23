import React, { useState } from "react";

function Aside({ selectedPanel }) {
  const [openSetting, setOpenSetting] = useState(false);
  return (
    <aside
      className={` text-white bg-gray-900  w-[250px] 
        h-screen ${
          openSetting ? `relative` : `absolute`
        } lg:relative pl-3 ease-in-out duration-300 ${
        openSetting ? `left-[0px]` : `left-[-250px] lg:left-0`
      }`}
    >
      <button
        onClick={() => {
          openSetting ? setOpenSetting(false) : setOpenSetting(true);
        }}
        className={`absolute lg:hidden flex items-center gap-x-2 top-6
           right-[-5.5rem] hover:right-[-5.3rem] bg-gray-900 px-2 hover:scale-[0.98]
            ease-in-out duration-300 p-1 rounded-r-lg shadow-lg z-[1000]`}
      >
        Setting
        <i
          className={`fa-solid fa-right-long ease-in-out duration-1000 ${
            openSetting ? `rotate-180` : ``
          }`}
        ></i>
      </button>
      <h1
        className={`font-semibold text-xl  text-center flex items-center justify-start gap-x-2 pt-5`}
      >
        Setting<i className="fa-solid fa-gear f"></i>
      </h1>
      <div className={`mt-10 flex flex-col items-start gap-y-2`}>
        <input
          type="button"
          className={`border text-center rounded-xl px-4 py-1 w-[90%]  hover:bg-azure-radiance-900
             mt-1 hover:scale-[0.99] ease-in-out duration-300`}
          value="Products"
          onClick={() => {
            selectedPanel("products");
          }}
        />
        <input
          type="button"
          className={`border text-center rounded-xl px-4 py-1 w-[90%]  hover:bg-azure-radiance-900
             mt-1 hover:scale-[0.99] ease-in-out duration-300`}
          value="Add Product"
          onClick={() => {
            selectedPanel("addProduct");
          }}
        />
        <input
          type="button"
          className={`border text-center rounded-xl px-4 py-1 w-[90%]  hover:bg-azure-radiance-900
             mt-1 hover:scale-[0.99] ease-in-out duration-300`}
          value="Orders"
          onClick={() => {
            selectedPanel("orders");
          }}
        />
        <input
          type="button"
          className={`border text-center rounded-xl px-4 py-1 w-[90%]  hover:bg-azure-radiance-900
             mt-1 hover:scale-[0.99] ease-in-out duration-300`}
          value="Privicy"
          onClick={() => {
            selectedPanel("setting");
          }}
        />
      </div>
    </aside>
  );
}

export default Aside;
