import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
function ShopSlide() {
  const pathImg =
    "https://media.thebodyshop.com/i/thebodyshop/Bond-Street-Station-1272x1272?$amplience-ct1-xs-img1$&wid=1900&hei=900&zoom=0.25&pcrop={($this.metadata.pointOfInterest.x*100%)-((($wid/$zoom)/2)-(($this.metadata.pointOfInterest.w/2)*100%))},{($this.metadata.pointOfInterest.y*100%)-((($hei/$zoom)/2)-(($this.metadata.pointOfInterest.h/2)*100%))},{$wid/$zoom},{$hei/$zoom}&w=$wid&h=$hei&sm=c&fmt=auto";
  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      name: "siver fashion collection",
      price: "1000$",
    },
    {
      image: pathImg,
      name: "siver fashion collection",
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
    }, 4000);
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
      return 5;
    } else if (window.innerWidth >= 768) {
      return 4;
    } else {
      return 2;
    }
  };

  const renderItems = () => {
    const itemsPerSlide = getItemsPerSlide();
    const startIndex = slideIndex * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    const slideItems = items.slice(startIndex, endIndex);

    return slideItems.map((item, index) => (
      <Link to="#" key={index}>
        <div
          key={index}
          className={`overflow-hidden
          w-[120px] h-[170px]  p-1 `}
        >
          <img
            src={item.image}
            className={`w-[110px]
             shadow-lg h-[110px] m-auto overflow-hidden rounded-full object-cover hover:scale-105 hover:shadow-2xl hover:shadow-yellow-200 ease-in-out duration-300 `}
          />
          <p
            className={`text-sm text-slate-800 m-[2px] text-center font-medium`}
          >
            {item.name}
          </p>
        </div>
      </Link>
    ));
  };

  return (
    <div className="w-full relative">
      <div className={` bg-blue-200  h-[113px] absolute w-full`}></div>
      <div
        className={`relative w-full md:w-[90%] max-w-[1500px] m-auto mt-3 z-10 `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          className={`ml-2 text-center w-full md:ml-0 mb-2 font-medium text-slate-900 
          text-lg capitalize inline-block`}
        >
          prime shop
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
