import React from "react";
import Filter from "./Filter";
import Navbar from "./MainNavbar";
import "./components.css";
import Loding from "./Loading";
import { Link, useParams } from "react-router-dom";
import { useGetItemsQuery } from "../app/api/itemEndpoints";
import Li_nk from "./Li_nk";
import Footer from "./Footer";

function ItemPage() {
  const { categorey } = useParams();
  const { data, isLoading, isError } = useGetItemsQuery();

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
          className={`flex flex-wrap gap-3 w-full justify-evenly border shadow-2xl rounded-xl sm:mr-3`}
        >
          {isError ? (
            <h1>Error</h1>
          ) : isLoading ? (
            <Loding />
          ) : (
            data.map((value) => {
              if (!categorey) {
                return (
                  <Li_nk
                    url={`/singleitem/${value.id}`}
                    key={value.id}
                    isScrollTop={true}
                    cssStyle={`overflow-hidden rounded-xl w-[90%] sm:w-[45%] lg:w-[30%] xl:w-[23%]
              shadow-xl h-[250px] sm:h-[350px] flex flex-row sm:flex-col sm:items-center relative  mt-4
               hover:mt-[10px] hover:shadow-2xl ease-out duration-300`}
                    content={
                      <div>
                        <div
                          className={`w-[50%] sm:w-[90%] mt-2 h-[200px] sm:h-[180px] relative`}
                        >
                          <img
                            className={`w-full h-full object-cover`}
                            src={value.image}
                          />
                          <h1
                            className="absolute bg-blue-900 text-cus-white-50 px-2
                    top-1 right-1 sm:bottom-1 sm:top-auto sm:left-1 sm:right-auto py-1 rounded-lg "
                          >
                            {value.discount > 0 ? (
                              <span className={`flex gap-1`}>
                                <span className="line-through text-azure-radiance-100">
                                  ${value.price}
                                </span>
                                <span className={`font-bold`}>
                                  %
                                  {discountPercent(
                                    value.discount / value.price
                                  )}
                                </span>
                                <span className="font-medium">
                                  ${value.discount}
                                </span>
                              </span>
                            ) : (
                              <span className="">${value.price}</span>
                            )}
                          </h1>
                        </div>
                        {/* ---------------- deatails------------------ */}
                        <div
                          className={` w-[48%] sm:w-[90%] h-fit mt-0 p-1 ml-1`}
                        >
                          <h1 className={`font-bold text-azure-radiance-950`}>
                            {value.name}
                          </h1>
                          <p
                            className={`text-sm  overflow-hidden mt-2
                      text-slate-700 `}
                          >
                            {readMore(value.desc)}. . . . .
                          </p>
                          <div
                            className={`flex justify-start text-yellow-400 mt-2`}
                          >
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star text-azure-radiance-950"></i>
                            <i className="fa-solid fa-star text-azure-radiance-950"></i>
                          </div>
                        </div>
                        <button
                          to={`/singleitem/${value.id}`}
                          className={`absolute left-0 bottom-0 text-center w-[100%]
                 bg-azure-radiance-900 py-1 font-semibold text-lg capitalize text-white`}
                        >
                          show
                        </button>
                      </div>
                    }
                  ></Li_nk>
                );
              } else if (value.category == categorey) {
                return (
                  <article
                    key={value.id}
                    className={`overflow-hidden rounded-xl w-[90%] sm:w-[45%] lg:w-[30%] xl:w-[23%]
              shadow-xl h-[250px] sm:h-[350px] flex flex-row sm:flex-col sm:items-center relative  mt-4
               hover:mt-[10px] hover:shadow-2xl ease-out duration-300`}
                  >
                    <div
                      className={`w-[50%] sm:w-[90%] mt-2 h-[200px] sm:h-[180px] relative`}
                    >
                      <img
                        className={`w-full h-full object-cover`}
                        src={value.image[0]}
                      />
                      <h1
                        className="absolute bg-blue-900 text-cus-white-50 px-2
                    top-1 right-1 sm:bottom-1 sm:top-auto sm:left-1 sm:right-auto py-1 rounded-lg "
                      >
                        {value.discount > 0 ? (
                          <span className={`flex gap-1`}>
                            <span className="line-through text-azure-radiance-100">
                              ${value.price}
                            </span>
                            <span className={`font-bold`}>
                              %{discountPercent(value.discount / value.price)}
                            </span>
                            <span className="font-medium">
                              ${value.discount}
                            </span>
                          </span>
                        ) : (
                          <span className="">${value.price}</span>
                        )}
                      </h1>
                    </div>
                    {/* ---------------- deatails------------------ */}
                    <div className={` w-[48%] sm:w-[90%] h-fit mt-0 p-1 ml-1`}>
                      <h1 className={`font-bold text-azure-radiance-950`}>
                        {value.name}
                      </h1>
                      <p
                        className={`text-sm  overflow-hidden mt-2
                      text-slate-700 `}
                      >
                        {readMore(value.discription)}. . . . .
                      </p>
                      <div
                        className={`flex justify-start text-yellow-400 mt-2`}
                      >
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star text-azure-radiance-950"></i>
                        <i className="fa-solid fa-star text-azure-radiance-950"></i>
                      </div>
                    </div>
                    <Link
                      to={`/singleitem/${value.id}`}
                      className={`absolute left-0 bottom-0 text-center w-[100%]
                 bg-azure-radiance-900 py-1 font-semibold text-lg capitalize text-white`}
                    >
                      show
                    </Link>
                  </article>
                );
              }
            })
          )}
        </section>
      </section>

      <Footer />
    </div>
  );
}

export default ItemPage;
