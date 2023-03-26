import React, { useState, useEffect } from "react";
import "./components.css";
function ShopSlide() {
  const pathImg =
    "https://media.thebodyshop.com/i/thebodyshop/Bond-Street-Station-1272x1272?$amplience-ct1-xs-img1$&wid=1900&hei=900&zoom=0.25&pcrop={($this.metadata.pointOfInterest.x*100%)-((($wid/$zoom)/2)-(($this.metadata.pointOfInterest.w/2)*100%))},{($this.metadata.pointOfInterest.y*100%)-((($hei/$zoom)/2)-(($this.metadata.pointOfInterest.h/2)*100%))},{$wid/$zoom},{$hei/$zoom}&w=$wid&h=$hei&sm=c&fmt=auto";
  const items = [
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "kurdstan market erbil",
      price: "1000$",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTimerPaused) {
        setSlideIndex(
          (prevIndex) =>
            (prevIndex + 1) % Math.ceil(items.length / getItemsPerSlide())
        );
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [isTimerPaused]);

  const handlePrevSlideClick = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(items.length / getItemsPerSlide()) - 1
        : prevIndex - 1
    );
    setIsDark(!isDark);
  };

  const handleNextSlideClick = () => {
    setSlideIndex(
      (prevIndex) =>
        (prevIndex + 1) % Math.ceil(items.length / getItemsPerSlide())
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
      return 7;
    } else if (window.innerWidth >= 768) {
      return 5;
    } else {
      return 3;
    }
  };

  const renderItems = () => {
    const itemsPerSlide = getItemsPerSlide();
    const startIndex = slideIndex * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    const slideItems = items.slice(startIndex, endIndex);

    return slideItems.map((item, index) => (
      <a href="#" key={index}>
        <div
          key={index}
          className={`overflow-hidden object-contain
         rounded w-[120px] lg:w-[150px] h-[130px]   ${
           isDark
             ? `bg-big-stone-800 text-big-stone-100`
             : `text-big-stone-100 bg-big-stone-900`
         }`}
        >
          <img src={item.image} className="w-full h-[95px]  " />
          <h1
            className={` text-center 
            capitalize underline mt-1 text-sm lg:text-base`}
          >
            {item.name}
          </h1>
        </div>
      </a>
    ));
  };

  return (
    <div
      className={`relative w-full md:w-[90%] max-w-[1200px] m-auto mt-3  
       ${
         isDark ? `bg-big-stone-900 text-big-stone-100` : `text-big-stone-900`
       }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1>prime shop</h1>
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
  );
}

export default ShopSlide;
