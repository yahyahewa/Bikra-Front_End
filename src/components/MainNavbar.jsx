import React, { useState } from "react";
// import "./components.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/images/company.png";
import cart from "../assets/images/cart-bascket.svg";

const Navbar = () => {
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
    <nav className=" max-w-[1500px] w-full m-auto bg-big-stone-900 py-1">
      <section className="flex justify-center gap-x-1 w-full">
        <Link to="/">
          <img src={logo} className={`w-[40px]`} />
        </Link>
        {/* start search bar */}
        <div
          className={`rounded bg-[#fff] flex overflow-hidden w-[75%] sm:w-[60%] md:w-[50%] lg:w-[40%]`}
        >
          <select className={`outline-none w-fit text-center rounded-l `}>
            <option>All</option>
            <option>Computer</option>
            <option>headfont</option>
          </select>
          <input
            className={`w-full border-l pl-2 outline-none `}
            type={`search`}
            placeholder="Search Bikra ..."
          />
          <i
            className="fa-solid fa-magnifying-glass flex items-center
           scale-110 hover:scale-125 transition px-1 text-big-stone-900 mr-1"
          ></i>
        </div>
        {/* end search bar */}
        {/* strat menu button */}
        <button
          className=" text-big-stone-200 overflow-hidden"
          onClick={() => {
            handleClick();
          }}
        >
          <span
            className={`bg-big-stone-100 h-[6px] w-8 mt-1 mb-[6px] block rounded-full transition-all  
        ${menubar ? `rotate-[45deg]` : ``}`}
          ></span>
          <span
            className={`bg-big-stone-100 h-[6px] w-8 mt-1 mb-[6px] block roun transition-all rounded-full 
        ${menubar ? `hidden` : ``}`}
          ></span>
          <span
            className={`bg-big-stone-100 h-[6px] w-8 mt-1 mb-[6px] block rounded-full  transition-all 
        ${menubar ? `rotate-[-45deg]` : ``}`}
          ></span>
        </button>
        {/* strat menu button */}
      </section>
      <article
        className={`w-full flex flex-col items-center gap-y-1 pt-2 transition-all overflow-hidden 
        ${menubar ? `h-auto` : `h-0`}`}
      >
        <Button
          type="button"
          class={`bg-big-stone-200 text-big-stone-900 w-[75%] sm:w-[60%] md:w-[50%] lg:w-[40%] rounded
          p-2 font-bold hover:bg-big-stone-300 transition md:text-lg md:p-1 md:py-2 ml-[6px]`}
          text="Create a Free Website"
        />
        <Button
          type="button"
          class={`text-big-stone-100 underline w-fit  rounded
          py-1 px-2 font-bold capitalize`}
          text="login"
        />
        <i class="fa-solid fa-cart-shopping fa-xl m-3 text-big-stone-100"></i>
        <select
          className={`ml-2 bg-transparent text-big-stone-50 rounded
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
