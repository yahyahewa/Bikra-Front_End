import React from "react";
import "./components.css";
function CategorySlide() {
  const category = [
    {
      id: 1,
      name: "Fashion",
      image:
        "https://as1.ftcdn.net/v2/jpg/02/66/11/50/1000_F_266115052_d3SVcKWO6LWrObPskrjpaM7tucWfF0vj.jpg",
    },
    {
      id: 2,
      name: "Beauty",
      image:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2022122/rs_1024x759-220222125215-1024-e-comm-Nordstrom-Beauty-Bestsellers.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
    },
    {
      id: 3,
      name: "Electronics",
      image:
        "https://www.siliconindia.com/news/newsimages/Webp.net-resizeimage%20(18).jpg",
    },
    {
      id: 4,
      name: "Home",
      image:
        "https://simg.nicepng.com/png/small/423-4234218_trend-features-a-collection-of-painted-vintage-furniture.png",
    },
    {
      id: 5,
      name: "Eksswarat",
      image:
        "https://eksswarat.yolasite.com/resources/10508303_1447955725463232_611729770_n.jpg",
    },
  ];
  return (
    <div className="mt-10 ">
      <section
        className={`scroll w-[95%]  shadow-2xl m-auto max-w-[1500px] rounded-2xl`}
      >
        <h1
          className=" px-1 p-yb-1 border-azure-radiance-900 text-sm md:text-base
       text-azure-radiance-900 font-medium ml-2 mt-1 absolute"
        >
          Categories
        </h1>
        {category.map((value, index) => {
          return (
            <article
              key={index}
              className={` inline-block mt-7 mx-3 md:mx-5
              rounded-xl shadow-xl overflow-hidden 
              mb-3 bg-cus-white-50 w-[120px] h-[190px] sm:w-[140px] sm:h-[210px]
               md:w-[190px] lg:w-[250px] `}
            >
              <div className={`md:px-3 overflow-hidden`}>
                <p
                  className={`text-sm text-left md:text-base py-1 text-slate-900 font-normal md:font-medium`}
                >
                  {value.name}
                </p>
                <img
                  className={` rounded w-[120px] h-[140px] sm:w-[140px] sm:h-[150px]
                  md:w-[190px] lg:w-[250px]  object-cover`}
                  src={value.image}
                />
                <h1
                  className={` text-xs ml-1 md:text-base underline text-azure-radiance-900 font-medium`}
                >
                  Shop now
                </h1>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default CategorySlide;
