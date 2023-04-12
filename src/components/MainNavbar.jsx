import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import cart from "../assets/images/wicker (2).png";
import cartDark from "../assets/images/wicker.png";
import { useSelector, useDispatch } from "react-redux";
import { dark, light } from "../Slice/themeSlice";
import "./components.css";
import Li_nk from "./Li_nk";
function Test() {
  const isDark = useSelector((state) => state.theme.value);
  const [isOpen, setISOpen] = useState(false);
  const dispatch = useDispatch();
  function handlClick() {
    if (!isDark) {
      dispatch(dark());
    } else {
      dispatch(light());
    }
  }
  const myDivRef = useRef(null);
  const textColor = "text-oasis-50";

  function handleNextSlideClick() {
    console.log(myDivRef.current.scrollLeft);
    myDivRef.current.scrollLeft += 50;
  }
  function handlePrevSlideClick() {
    myDivRef.current.scrollLeft -= 50;
  }
  // bg-[#010113] dark blue {dark mode}
  return (
    <nav className={`mb-[50px] ${isDark ? `bg-oasis-950` : ``}`}>
      <div className={`flex justify-center items-center p-2 gap-x-2 relative`}>
        <div
          className={`flex items-center gap-x-2 overflow-hidden w-[90%] lg:w-[40%]`}
        >
          <Link
            to={`/`}
            className={`text-[2rem] font-semibold pb-[2px] ${
              isDark ? textColor : ` text-oasis-600`
            } `}
          >
            Bikra
          </Link>
          <div
            className={`border-[2px] overflow-hidden rounded-[2rem] flex 
          justify-center items-center bg-oasis-50 border-oasis-950 w-[100%] h-[2.5rem] lg:h-[3rem]
          `}
          >
            <input
              type="search"
              className={`h-full outline-none w-full p-[2px] px-3 bg-transparent`}
              placeholder="Search Bikra"
            />
            <button
              className={`h-full px-4 hover:bg-orange-200 ease-in-out duration-300`}
            >
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
          </div>
        </div>
        <div
          className={`flex absolute flex-col top-0 ${
            isDark ? ` bg-oasis-950` : ` bg-oasis-100`
          } lg:bg-transparent w-full h-screen 
          justify-start gap-y-4
        lg:h-auto lg:w-auto lg:flex-row lg:relative lg:left-0 lg:justify-center 
          items-center overflow-hidden gap-x-2 z-30 ease-in-out duration-500 transition-all
        ${isOpen ? `left-0` : ` left-[-100%]`}`}
        >
          <button
            onClick={() => {
              isOpen ? setISOpen(false) : setISOpen(true);
            }}
            className={`lg:hidden absolute rounded-full right-6 top-6 
          ease-in-out duration-500 ${isDark ? `text-oasis-50` : ` `} ${
              isOpen ? `rotate-360` : `rotate-0`
            }`}
          >
            <i className="fa-regular fa-circle-xmark fa-2xl "></i>
          </button>
          <h1
            className={`rounded-[3rem] h-[3rem] border-[2px]  
             overflow-hidden items-center flex px-4 mt-4 lg:mt-0
           text-oasis-950 font-semibold hover:bg-oasis-400 ease-in-out duration-300
           ${
             isDark
               ? `border-oasis-100 bg-oasis-200`
               : `border-oasis-800 bg-oasis-300`
           }`}
          >
            <Link to={`/`}>Creat a Website</Link>
          </h1>
          <h1
            className={`rounded-[3rem] border-[2px] border-oasis-800 h-[3rem] overflow-hidden items-center flex px-4
           text-black font-semibold ease-in-out duration-300
             ${
               isDark
                 ? ` border-oasis-100 ${textColor}  `
                 : ` hover:bg-oasis-100`
             }`}
          >
            <Link to={`/`}>Login</Link>
          </h1>
          <h1
            className={`rounded-[3rem] border-oasis-800 h-[3rem] overflow-hidden items-center flex px-4
           text-black font-semibold  ease-in-out duration-300
            ${isDark ? textColor : `hover:bg-oasis-100`}`}
          >
            <Link to={`/`}>About</Link>
          </h1>
          <Link
            to={`/`}
            className={`h-[3rem] w-[3rem] flex items-center justify-center rounded-full 
           ease-in-out duration-300 ${
             isDark ? textColor : `hover:bg-orange-100`
           }`}
          >
            <i className={`fa-regular fa-heart fa-xl `}></i>
          </Link>
          <Li_nk
            url={`/cart`}
            cssStyle={`h-[3rem] w-[3rem] flex items-center justify-center rounded-full
           ease-in-out duration-300 pb-[2px] ${
             isDark ? `` : `hover:bg-orange-100 `
           }`}
            content={
              <img
                src={isDark ? cartDark : cart}
                className={`w-[55%] h-[55%]`}
              />
            }
            isScrollTop={"false"}
          />
          <button
            onClick={() => {
              handlClick();
            }}
            className={`rounded-[3rem]  h-[2.5rem] overflow-hidden items-center flex px-4
           text-black font-semibold w-[1rem] justify-center ease-in-out duration-300 border-b-[1rem] ${
             isDark
               ? ` border-oasis-800 bg-oasis-100`
               : `  hover:bg-oasis-100 border-oasis-500 `
           }`}
          >
            {isDark ? (
              <i className=" fa-regular shadow-2xl fa-moon rotate-9 ease-in-out duration-1000"></i>
            ) : (
              <i className="fa-sharp  fa-regular fa-spin  fa-sun rotate-[360deg] ease-in-out duration-1000"></i>
            )}
          </button>
        </div>
        <button
          onClick={() => {
            isOpen ? setISOpen(false) : setISOpen(true);
          }}
          className={`lg:hidden 
          ease-in-out duration-500 ${
            isDark ? `text-orange-50` : `text-oasis-950`
          } ${isOpen ? `rotate-360` : `rotate-0`}`}
        >
          <i className="fa-solid fa-bars fa-2xl"></i>
        </button>
      </div>
    </nav>
  );
}

export default Test;
