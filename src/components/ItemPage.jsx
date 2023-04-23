import React from "react";
import Filter from "./Filter";
import Navbar from "./MainNavbar";
import "./components.css";
import Loding from "./Loading";
import { Link, useParams } from "react-router-dom";
// import {
//   useAddToCartMutation,
//   useGetItemsQuery,
//   useGetorderQuery,
// } from "../app/api/itemEndpoints_";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Li_nk from "./Li_nk";
function ItemPage() {
  const custID = useSelector((state) => state.user.custUserName);
  // const {
  //   data: order,
  //   isLoading: orderLoding,
  //   isError: orderError,
  // } = useGetorderQuery();
  const order = [];
  const orderLoding = false;
  const orderError = false;
  // const [addToCart] = useAddToCartMutation();
  function addCardHandle(id) {
    let CanAdd = true;
    orderError ? (
      ``
    ) : orderLoding ? (
      <Loading />
    ) : (
      order.map((value) => {
        if (value.itemid == id && value.status == "card") {
          CanAdd = false;
        }
      })
    );
    let maxNumber;
    if (CanAdd === true) {
      let idArray = [0];
      order.map((value) => {
        idArray.push(value.id);
      });
      maxNumber = Math.max(...idArray);
      window.localStorage.setItem("card", maxNumber + 1);
      addToCart({
        status: "card",
        itemid: id,
        custId: custID,
        id: order.lenght,
      });
    }
  }
  const { categorey } = useParams();
  //const { data, isLoading, isError } = useGetItemsQuery();
  const data = [];
  const isLoading = false;
  const isError = false;
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
          relative h-full hidden md:block mt- border  ml-3 rounded-xl`}
        >
          <Filter />
        </aside>
        {/* -------------------------items------------------------------- */}
        <section
          className={`flex flex-wrap gap-3 w-[90%] justify-evenly rounded-xl sm:mr-3`}
        >
          {isError ? (
            <Loding />
          ) : isLoading ? (
            <Loding />
          ) : (
            data.map((value) => {
              if (!categorey) {
                return (
                  <Link
                    key={value.id}
                    className={`flex flex-col h-[350px] w-full sm:w-[45%] md:w-[45%] lg:w-[30%]
                    xl:w-[23%]
                    rounded-xl border relative overflow-hidden`}
                  >
                    {/* imgae ----------------------- image */}
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
                      <div className={`overflow-hidden p-2 max-h-[40px]`}>
                        <h1>{value.name}</h1>
                      </div>
                      <div className={`text-azure-radiance-950`}>
                        <span className={`ml-2 font-semibold`}>Price $</span>
                        {value.discount > 0 ? (
                          <span>
                            <span className={`font-semibold`}>
                              {value.discount}
                            </span>
                            <span className={`ml-1 line-through`}>
                              ${value.price}
                            </span>
                          </span>
                        ) : (
                          <span className={`font-semibold`}>{value.price}</span>
                        )}
                      </div>
                      <h1 className={`text-sm px-2 py-1`}>
                        {readMore(value.desc)} ....
                      </h1>
                      <div className="flex items-center absolute bottom-0 left-0 w-full">
                        <Li_nk
                          key={value.id}
                          cssStyle={`w-[50%] text-center border py-1`}
                          url={`/singleitem/${value.id}`}
                          content={"Show"}
                        />
                        <button
                          onClick={() => {
                            addCardHandle(value.id);
                          }}
                          className={`w-[50%] border border-jaguar-500 text-white bg-jaguar-500 py-1`}
                        >
                          Card
                        </button>
                      </div>
                    </div>
                  </Link>
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
