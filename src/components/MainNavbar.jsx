import React, { useState } from "react";
import "./components.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/images/company.png";

const Navbar = ({ showFilterButton }) => {
  const isDark = false;
  const [menubar, setMenuBar] = useState(false);
  function handleClick() {
    if (!menubar) setMenuBar(true);
    else setMenuBar(false);
  }

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <nav className="navarb max-w-[1500px] w-full m-auto py-1">
      <section className="flex justify-center gap-x-1 w-full">
        <Link to="/">
          <img src={logo} className={`w-[40px]`} />
        </Link>
        {/* start search bar */}
        <div
          className={`rounded border flex overflow-hidden w-[75%] sm:w-[60%] md:w-[50%] lg:w-[40%]`}
        >
          <Button
            type="button"
            class={`font-semibold bg-azure-radiance-600 text-cus-white-50 px-2 ${showFilterButton} `}
            text="Filter"
          />
          <input
            className={`w-full border-l pl-2 outline-none `}
            type={`search`}
            placeholder="Search Bikra ..."
          />
          <i
            className="fa-solid fa-magnifying-glass flex items-center
           scale-110 hover:scale-125 transition px-1 mr-1"
          ></i>
        </div>
        {/* end search bar */}
        {/* strat menu button */}
        <button
          className={`overflow-hidden ${menubar ? `rotate-[-90deg] ml-1` : ``}`}
          onClick={() => {
            handleClick();
          }}
        >
          <span
            className={` h-[6px] w-8 mt-1 mb-[6px] bg-azure-radiance-600 block rounded-full transition-all  
        ${menubar ? `rotate-[40deg]` : ``}`}
          ></span>
          <span
            className={` h-[6px] mt-1 mb-[6px] bg-azure-radiance-600 block roun transition-all rounded-full 
        ${menubar ? `w-[29px]` : ` w-8`}`}
          ></span>
          <span
            className={` h-[6px] w-8 mt-1 mb-[6px] bg-azure-radiance-600 block rounded-full  transition-all 
        ${menubar ? `rotate-[-40deg]` : ``}`}
          ></span>
        </button>
        {/* strat menu button */}
      </section>
      <article
        className={`w-full flex flex-col items-center gap-y-1 transition-all overflow-hidden 
        ${menubar ? `h-auto ` : `h-0  `}`}
      >
        <Button
          type="button"
          class={` mt-2 bg-azure-radiance-600 text-cus-white-50 w-[75%] sm:w-[60%] md:w-[50%] lg:w-[40%] rounded
          p-2 font-bold   md:text-lg md:p-1 md:py-2 ml-[6px] hover:bg-azure-radiance-700 transition-all`}
          text="Create a Free Website"
        />
        <Button
          type="button"
          class={`border  rounded  w-[75%] sm:w-[60%] md:w-[50%] lg:w-[40%]
          py-1 px-2 font-bold capitalize text-slate-700 hover:bg-azure-radiance-100 ml-2`}
          text="login"
        />
        <Link
          to="/item"
          className={`my-1 text-lg border-b border-azure-radiance-050 text-azure-radiance-900`}
        >
          Items
        </Link>
        <i className="fa-solid fa-cart-shopping fa-xl m-3"></i>
        <select
          className={`ml-2 bg-trans7arent rounded
             py-1 font-normal md:font-medium capitalize w-fit ltr outline-none`}
          onChange={handleChange}
        >
          <option className="text-big-stone-900 w-fit ltr" value="option1">
            English
          </option>
          <option className="text-big-stone-900 w-fit ltr" value="option2">
            کوردی
          </option>
          <option className="text-big-stone-900 w-fit ltr" value="option3">
            عربی
          </option>
        </select>
      </article>
    </nav>
  );
};

export default Navbar;
