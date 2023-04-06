import React, { useState } from "react";
import "./components.css";
function Filter() {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(1000);
  const [rating, setRating] = useState([]);

  const getVals = (e) => {
    let parent = e.target.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);

    if (slide1 > slide2) {
      let tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }
    setMinValue(slide1);
    setMaxValue(slide2);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    "All Categoreis",
    "Clothing",
    "Beauty",
    "Toys and Games",
    "Books and Stationery",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const ratingSelect = (e) => {
    let ele = "";
    for (let i = 0; i < 5; i++) {
      if (i < e.target.value) {
        ele = ele + "text-yellow-500 mx-2 fa-solid fa-star transition,";
      } else {
        ele = ele + " mx-2 fa-regular fa-star transition,";
      }
    }
    const r = ele.split(",");
    setRating(r);
  };
  return (
    <div className="text-slate-800 ">
      <h1 className={`text-center font-bold text-xl mb-3`}>Filters</h1>
      <div className={` border-b pb-1`}>
        <h1 className={`text-center text-lg font-semibold text-slate-800`}>
          Price Range
        </h1>
        <div className="w-full text-center pb-4">
          <h1 className="block font-medium">
            ${minValue}
            <i className="fa-solid fa-arrow-down mx-1 rotate-[-90deg]"></i> $
            {maxValue}
          </h1>
          <input
            className={`m-auto mt-1 `}
            type="range"
            min="1"
            max="1000"
            onInput={getVals}
          />
          <input
            className={`m-auto mt-1`}
            type="range"
            min="1"
            max="1000"
            onInput={getVals}
          />
        </div>
      </div>
      <div className="w-full mt-4 border-b pb-1">
        <h1 className={`text-center font-bold  text-slate-700`}>
          Select Categoreis
        </h1>
        <button
          className="m-auto block px-2 py-[2px] 
          rounded border w-fit font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || "All Categoreis"}
          <i
            className={`fa ml-2 fa-chevron-down ease-in-out duration-300 ${
              isOpen ? `rotate-[-180deg]` : `rotate-[360deg]`
            }`}
          ></i>
        </button>
        {isOpen && (
          <div className={`text-center`}>
            {options.map((option) => (
              <div
                className={`border-b w-fit m-auto`}
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={`mt-4 border-b pb-3 overflow-hidden`}>
        <h1 className="text-center font-bold">Rating</h1>
        <input
          className={`mt-1 w-[90%] block m-auto`}
          onInput={ratingSelect}
          type="range"
          min="0"
          max="5"
        />
        <div className="flex flex-col-reverse items-center gap-2 justify-evenly w-full m-auto mt-4">
          {rating.map((val, index) => {
            return <i className={`${val}`} key={index}></i>;
          })}
        </div>
      </div>
      <div className={`mt-4 border-b pb-3 overflow-hidden`}>
        <h1 className={`text-center font-bold capitalize`}>Offers</h1>
        <div className={`flex flex-col items-start w-fit m-auto mt-1`}>
          <label className={`capitalize`}>
            <input type="radio" name="offers" className={`mr-1`} />
            No offers
          </label>
          <label className={`capitalize`}>
            <input type="radio" name="offers" className={`mr-1`} />
            Discounts
          </label>
          <label className={`capitalize`}>
            <input type="radio" name="offers" className={`mr-1`} />
            All of them
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
