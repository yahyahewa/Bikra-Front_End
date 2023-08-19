import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
import Li_nk from "./Li_nk";
import Rating from "./Rating";
import Loding from "./Loading";
import { useGetSomeItemForHomeQuery } from "../app/api/productEndPoint";
function Items(props) {
  const limit = { limit: 6 };
  const { data, isLoading, isError } = useGetSomeItemForHomeQuery(limit);

  function discountPercent(value) {
    value = String(100 - value * 100);
    return value.slice(0, 2);
  }
  return (
    <section>
      <Link to="/item">
        <h1 className={`ml-5 text-lg text-jaguar-500 underline`}>
          {props.text}
        </h1>
      </Link>
      <section
        className="flex items flex-wrap sm:flex-row w-full  lg:w-[90%]
     items-start justify-evenly relative m-auto   gap-[2px] max-w-[1500px]"
      >
        {isError
          ? <Loding/>
          : isLoading
          ? <Loding/>
          : data.data?.map((value) => {
              return (
                <Li_nk
                  isScrollTop={true}
                  key={value._id}
                  url={`/singleitem/${value._id}`}
                  cssStyle={`overflow-hidden rounded-xl w-[90%] sm:w-[45%] lg:w-[30%] xl:w-[23%]
            h-[330px] relative  mt-4 hover:mt-[10px] hover:shadow-xl ease-out duration-300 `}
                  content={
                    <article className="bg-cus-white-50">
                      <div
                        className={`w-[100%] m-auto mt-2 h-[180px]
                      rounded-t-md overflow-hidden relative`}
                      >
                        <img
                          className={`w-full h-full object-cover`}
                          src={`${import.meta.env.VITE_BACK_END}uploads/image/${
                            value.image
                          }`}
                        />

                        <span
                          className={`absolute bottom-1 left-1
                           ml-2 mr-1 capitalize bg-green-500 text-white font-semibold px-2 rounded-md`}
                        >
                          %{discountPercent(value.discount / value.price)}
                        </span>
                      </div>
                      <div
                        className={`h-auto w-full max-h-[50px] overflow-hidden`}
                      >
                        <h1
                          className={`text-left ml-2 mt-2 text-azure-radiance-900 font-semibold capitalize`}
                        >
                          {value.name}
                        </h1>
                      </div>
                      <h1
                        className={`text-sm text-left ml-2 mt-2 text-azure-radiance-950`}
                      >
                        {value.discount > 0 ? (
                          // ...............................................
                          <span className={` text-base`}>
                            <span className=" text-azure-radiance-950 text-base font-semibold">
                              Price ${value.discount}
                            </span>
                            <span>
                              <span className="line-through font-bold text-red-500  ml-1">
                                ${value.price}
                              </span>
                            </span>
                          </span>
                        ) : (
                          // ...............................................
                          <span
                            className={`text-gray-800 text-base font-semibold`}
                          >
                            Price ${value.price}
                          </span>
                        )}
                      </h1>
                      <Rating
                        initialRating={value.rating}
                        lenght={value.rating.length}
                      />
                      <button
                        className={`absolute left-0 bottom-0 text-center w-[100%]
               bg-jaguar-400 hover:bg-jaguar-500 hover:bottom-[-2px] ease-in-out duration-300
                py-1 font-semibold text-lg capitalize text-white`}
                      >
                        show
                      </button>
                    </article>
                  }
                ></Li_nk>
              );
            })}
      </section>
    </section>
  );
}

export default Items;
