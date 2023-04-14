import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import { useGetItemsQuery } from "../app/api/itemEndpoints";
import { useSelector } from "react-redux";
import { parse } from "postcss";
function ShopSlide() {
  const { data, isLoading, isError } = useGetAllItemsQuery();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const isDark = useSelector((state) => state.theme.value);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTimerPaused && data !== "undefined") {
        if (data.length) {
        }
        // setSlideIndex(
        //   (prevIndex) =>
        //     (prevIndex + 1) % Math.ceil(data.length / getItemsPerSlide())
        // );
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [isTimerPaused]);
  // isTimerPaused;
  const handlePrevSlideClick = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(data.length / getItemsPerSlide()) - 1
        : prevIndex - 1
    );
  };

  const handleNextSlideClick = () => {
    setSlideIndex(
      (prevIndex) =>
        (prevIndex + 1) % Math.ceil(data.length / getItemsPerSlide())
    );
  };

  const handleMouseEnter = () => {
    setIsTimerPaused(true);
  };

  const handleMouseLeave = () => {
    setIsTimerPaused(false);
  };

  const getItemsPerSlide = () => {
    if (window.innerWidth >= 1200) {
      return 5;
    } else if (window.innerWidth >= 768) {
      return 4;
    } else {
      return 2;
    }
  };

  const renderItems = () => {
    {
      const itemsPerSlide = getItemsPerSlide();
      const startIndex = slideIndex * itemsPerSlide;
      const endIndex = startIndex + itemsPerSlide;
      if (!isLoading && !isError) {
        const slideItems = data.slice(startIndex, endIndex);

        return slideItems.map((value) => (
          <Link to={`/singleitem/${value.id}`} key={value.id}>
            <div
              key={value.id}
              className={`overflow-hidden
          w-[140px] h-[200px]  p-1 `}
            >
              <img
                src={value.image ? value.image[0] : ""}
                className={`w-[110px]
             shadow-lg h-[110px] m-auto overflow-hidden rounded-full object-cover hover:scale-105 ease-in-out duration-300 `}
              />
              <p
                className={`text-base m-[2px] text-center md:font-semibold slow-underline
            capitalize mt-2 ${
              isDark ? `text-oasis-50 dark` : `text-slate-800`
            }`}
              >
                {value.name}
              </p>
            </div>
          </Link>
        ));
      }
    }
  };

  return (
    <div className="w-full relative">
      <div
        className={` ${
          isDark ? `bg-[#010113]` : `bg-blue-100`
        }  h-[113px] absolute w-full ease-in-out duration-150`}
      ></div>
      <div
        className={`relative w-full md:w-[90%] max-w-[1500px] m-auto mt-3 z-10 `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          className={`ml-2 mt-1 text-center w-full md:ml-0 mb-2 font-semibold text-yellow-900
          text-xl capitalize inline-block`}
        >
          prime shop<i className="fa-solid fa-award ml-1 "></i>
        </a>
        <div className="flex flex-wrap justify-evenly items-center ">
          {renderItems()}
        </div>
        <button className="prev" onClick={handlePrevSlideClick}>
          &#10094;
        </button>
        <button className="next" onClick={handleNextSlideClick}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default ShopSlide;
