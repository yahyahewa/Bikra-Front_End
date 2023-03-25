import React, { useState } from "react";
import "./components.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/images/company.png";
import cart from "../assets/images/cart.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [lang, setLang] = useState(false);
  function handleClick() {
    if (!click) setClick(true);
    else setClick(false);
  }
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <nav className="flex justify-start w-full bg-big-stone-900 py-1">
      <div className="flex items-center justify-between w-full  bg-big-stone-900">
        {/* box search */}
        <div
          className={`rounded  w-full md:w-[50%] flex 
          justify-between overflow-hidden 
           bg-big-stone-900 m-aut text-xs md:text-base`}
        >
          <Link to="/">
            <img className={`w-10`} src={logo} />
          </Link>
          <select className={`w-auto outline-none text-center rounded-l `}>
            <option>All</option>
            <option>Computer</option>
            <option>headfont</option>
          </select>
          <input
            type="search"
            className={`w-[90%] border-l outline-none pl-1`}
            placeholder={`Search Bikra...`}
          />
          <i
            className="fa-solid fa-magnifying-glass flex items-center
           scale-110 hover:scale-125 transition bg-big-stone-500 px-1 text-big-stone-50"
          ></i>
        </div>
        {/* box responsive */}
        <div
          className={`${
            click
              ? `nav-options flex active`
              : `nav-options flex justify-start w-[48%]`
          }`}
        >
          <Button
            class={`mr-2 text-big-stone-50 border-0 md:border rounded px-2
             py-1 font-normal md:font-medium capitalize  transition`}
            text={"filter"}
            type="button"
          />
          <Button
            type="button"
            class={`bg-big-stone-500 py-1 px-2 rounded h-full ml-1
             text-big-stone-50 hover:bg-big-stone-600 transition`}
            text="Create a Website"
          />
          <Button
            type="button"
            class={` underline py-1 px-2 rounded h-full ml-1 text-big-stone-50`}
            text="Login"
          />
          <button clas={`ml-1`}>
            <img
              src={cart}
              className={`w-[20px] sm:w-[22px] hover:scale-110 m-auto transition`}
            />
          </button>
          <select
            className={`ml-2 bg-transparent text-big-stone-50 rounded
             py-1 font-normal md:font-medium capitalize w-fit ltr outline-none`}
            value={selectedOption}
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
          <button
            className={` text-sm lg:text-base text-big-stone-50 rounded px-2
             py-1 font-normal md:font-medium capitalize `}
          >
            <i className="fa-solid fa-lightbulb"></i> Dark
          </button>
        </div>
      </div>

      <button
        className="inline-block md:hidden text-big-stone-200 px-1"
        onClick={() => {
          handleClick();
        }}
      >
        menu
      </button>
    </nav>
  );
};

export default Navbar;
