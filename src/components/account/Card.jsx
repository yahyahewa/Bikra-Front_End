import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating";
function Card({ data }) {
  function readMore(text) {
    if (window.innerWidth >= 1200) {
      return text.slice(0, 50);
    } else if (window.innerWidth >= 1020) {
      return text.slice(0, 60);
    } else if (window.innerWidth >= 640) {
      return text.slice(0, 70);
    } else {
      return text.slice(0, 150);
    }
  }
  function discountPercent(value) {
    value = String(100 - value * 100);
    return value.slice(0, 2);
  }
  return (
    <section className={` w-full flex flex-wrap gap-2 p-2 justify-center `}>
      {data?.map((value) => {
        return (
          <div
            key={value._id}
            className={`flex flex-col  w-full sm:w-[45%] md:w-[45%] lg:w-[30%]
                    xl:w-[23%]
                    rounded-xl border relative overflow-hidden`}
          >
            {/* --------------------imgae -----------------------  */}
            <div className={`w-[100%]  border-b relative`}>
              <img
                src={value.image}
                className={`w-full h-[180px] object-cover`}
              />
              {value.discount > 0 ? (
                <span
                  className={`ml-1 text-white font-semibold absolute
                        bottom-1 left-1 p-1 bg-green-700 rounded-xl`}
                >
                  %{discountPercent(value.discount / value.price)}
                </span>
              ) : (
                ``
              )}
            </div>
            {/* detail ----------------------- detail */}
            <div className={`w-[100%`}>
              <div className={`mb-10`}>
                <div className={`overflow-hidden p-2 max-h-[40px]`}>
                  <h1>{value.name}</h1>
                </div>
                <div className={`text-azure-radiance-950`}>
                  <span className={`ml-2 font-semibold`}>Price $</span>
                  {value.discount > 0 ? (
                    <span>
                      <span className={`font-bold`}>{value.discount}</span>
                      <span
                        className={`ml-1 font-bold text-green-500 line-through`}
                      >
                        ${value.price}
                      </span>
                    </span>
                  ) : (
                    <span className={`font-semibold`}>{value.price}</span>
                  )}
                </div>
                <h1 className={`text-sm px-2 py-1`}>
                  {readMore(value.description)} ....
                </h1>
                <Rating
                  initialRating={value.rating}
                  lenght={value.rating.length}
                />
              </div>
              <div className="flex items-center absolute bottom-0 left-0 w-full">
                <Link
                  to={`/itemeditor/${value.id}`}
                  className={`w-[50%] border border-jaguar-500 text-center text-white bg-jaguar-500 py-1`}
                >
                  Edit
                </Link>
                <button
                  className={`w-[50%] border border-red-500 text-white bg-red-500 py-1`}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Card;
