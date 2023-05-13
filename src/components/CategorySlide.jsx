import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
import { useGetCategoreyQuery } from "../app/api/categorey.endpoint";
function CategorySlide() {
  const category = [];
  if (true) {
    const { data, isError, isLoading } = useGetCategoreyQuery();
    if (!isLoading) {
      if (data) {
        data.data.forEach((value) => {
          category.push(value);
        });
      }
    }
  }
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
        {category.map((value) => {
          return (
            <Link
              to={`/item/${value._id}`}
              key={value._id}
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
                  src={`http://localhost:4000/uploads/image/${value.image}`}
                />
                <h1
                  className={` text-xs ml-1 md:text-base underline text-azure-radiance-900 font-medium`}
                >
                  Shop now
                </h1>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default CategorySlide;
