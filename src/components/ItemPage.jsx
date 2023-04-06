import React, { useState } from "react";
import Filter from "./Filter";
import Navbar from "./MainNavbar";
import "./components.css";

function ItemPage() {
  const text =
    "   SparkleClean: An all-purpose household cleaner that leaves " +
    " surfaces sparkling clean and fresh. ZenBlend: A premium" +
    "                herbal tea blend that promotes relaxation and stress relief." +
    "               SparkleClean: An all-purpose household cleaner that leaves" +
    "              surfaces sparkling clean and fresh. ZenBlend: A premium" +
    "             herbal tea blend that promotes relaxation and stress relief." +
    "            SparkleClean: An all-purpose household cleaner that leaves" +
    "           surfaces sparkling clean and fresh. ZenBlend: A premium  herbal tea blend that promotes relaxation and stress relief.";
  const mage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThR55ZRaM53TW0VWVWqtV2SKWE4D2Gi9cq7w&usqp=CAU";
  const item = [2, 3, 4, 5, 6, 7, 8, 91, 3, 4, 5, 6, 7, 8, 91];
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
    <div className={`max-w-[1500px] m-auto`}>
      <Navbar showFilterButton="sm:hidden" />
      <section
        className={`flex flex-row justify-evenly items-start gap-3 mt-4`}
      >
        <aside
          className={`overflow-hidden w-fit sm:w-[300px]
          relative h-full hidden md:block mt- border shadow-2xl ml-3 rounded-xl`}
        >
          <Filter />
        </aside>
        {/* -------------------------items------------------------------- */}
        <section
          className={`flex flex-wrap gap-3 w-fit justify-evenly border shadow-2xl rounded-xl sm:mr-3`}
        >
          {item.map((a, index) => {
            return (
              <article
                key={index}
                className={`overflow-hidden rounded-xl w-[90%] sm:w-[45%] lg:w-[30%] xl:w-[23%]
              shadow-xl h-[250px] sm:h-[350px] flex flex-row sm:flex-col sm:items-center relative  mt-4
               hover:mt-[10px] hover:shadow-2xl ease-out duration-300`}
              >
                <div
                  className={`w-[50%] sm:w-[90%] mt-2 h-[200px] sm:h-[180px] relative`}
                >
                  <img className={`w-full h-full object-cover`} src={mage} />
                  <h1
                    className="absolute bg-blue-900 text-cus-white-50 px-2
                    top-1 right-1 sm:bottom-1 sm:top-auto sm:left-1 sm:right-auto py-1 rounded-lg "
                  >
                    {index % 3 == 1 ? (
                      <span className={`flex gap-1`}>
                        <span className="line-through text-azure-radiance-100">
                          $3000
                        </span>
                        <span className={`font-bold`}>
                          %{discountPercent(2300 / 3000)}
                        </span>
                        <span className="font-medium">$2300</span>
                      </span>
                    ) : (
                      <span className="">$3000</span>
                    )}
                  </h1>
                </div>
                {/* ---------------- deatails------------------ */}
                <div className={` w-[48%] sm:w-[90%] h-fit mt-0 p-1 ml-1`}>
                  <h1 className={`font-bold text-azure-radiance-950`}>
                    LuminaSleep
                  </h1>
                  <p
                    className={`text-sm  overflow-hidden mt-2
                      text-slate-700 `}
                  >
                    {readMore(text)}. . . . .
                  </p>
                  <div className={`flex justify-start text-yellow-400 mt-2`}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star text-azure-radiance-950"></i>
                    <i className="fa-solid fa-star text-azure-radiance-950"></i>
                  </div>
                </div>
                <button
                  className={`absolute left-0 bottom-0 text-center w-[100%]
                 bg-azure-radiance-900 py-1 font-semibold text-lg capitalize text-white`}
                >
                  show
                </button>
              </article>
            );
          })}
        </section>
      </section>
    </div>
  );
}

export default ItemPage;
