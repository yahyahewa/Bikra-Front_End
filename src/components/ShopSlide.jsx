import React, { useState, useEffect } from "react";
// import img from "../assets/images/cart.png";
import "./components.css";
function ShopSlide() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      title: "title",
      description: "kurdstan shop",
    },
    {
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      title: "title",
      description: "kurdstan shop",
    },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovering) {
        setCurrentSlideIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, isHovering]);

  return (
    <section
      className={`relative w-full h-48`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-cart-slide absolute top-0 left-0 w-full h-full opacity-0 transition ${
              index === currentSlideIndex ? "opacity-100" : ""
            }`}
          >
            <img src={slide.image} alt={slide.title} />
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <img className="ml-11" src={slide.image} alt={slide.title} />
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <button
        className="slide-cart-button"
        onClick={() =>
          setCurrentSlideIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
          )
        }
      >
        Next
      </button>
      <button
        className="slide-cart-button left-1 w-3"
        onClick={() =>
          setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
          )
        }
      >
        preve
      </button>
    </section>
  );
}

export default ShopSlide;
