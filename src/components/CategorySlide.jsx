import React from "react";
import "./components.css";
function CategorySlide() {
  const category = [
    {
      name: "Fashion",
      image:
        "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Fashion",
      image:
        "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Fashion",
      image:
        "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "FashionFashion ",
      image:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
    {
      name: "Fashion Fashion Fashion",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      name: "Fashion",
      image:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    },
    {
      name: "Fashion",
      image:
        "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Fashion",
      image:
        "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  return (
    <div className="mt-10 ">
      <section
        className={`scroll w-[95%] bg-red-100 shadow-2xl m-auto max-w-[1500px] rounded-2xl`}
      >
        <h1
          className="border-b-[1px] px-1 p-yb-1 border-azure-radiance-900 text-sm md:text-base
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
