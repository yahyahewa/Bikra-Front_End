import React, { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { useAddToCartMutation } from "../app/api/orderEndpoint";
import { useGetOneItemSinglePageQuery } from "../app/api/productEndPoint";
import { useGetUserInformationQuery } from "../app/api/LoginAndSignUpEndPopiant";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../Slice/userslice";

function SingleItem() {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetOneItemSinglePageQuery(id);
  const custID = useSelector((state) => state.user?.user?._id);
  const dispatch = useDispatch();
  // ---------------------------------------------
  const {
    data: userInformation,
    isError: isUSerError,
    isLoading: isUserLoading,
  } = useGetUserInformationQuery();
  //---------------------------------------------
  const [addToCart] = useAddToCartMutation();
  ///---------------------------------------------
  useEffect(() => {
    if (!isUSerError && !isUserLoading) {
      dispatch(userData(userInformation?.data));
    }
  }, [userInformation]);
  // add to card function
  const handlAddToCart = (e) => {
    if (custID) {
      addToCart({
        product: e.target.id,
        customer: custID,
      });
    }
  };

  // ---------------------------------------------

  function discountPercent(value) {
    value = String(100 - value * 100);
    return value.slice(0, 2);
  }
  const [isTruncated, setIsTruncated] = useState(true);
  function ReadMore(text) {
    return isTruncated ? text.slice(0, 100) : text;
  }
  console.log(`localhost:5173/uploads/image/${data?.data?.image}`);
  return (
    <main>
      <MainNavbar />
      <section
        className={` shadow-2xl w-[95%] md:w-[90%] mt-10 rounded-xl  m-auto`}
      >
        {isError ? (
          <h1>Error</h1>
        ) : isLoading ? (
          <h1>isLoading....</h1>
        ) : (
          data.status === "success" && (
            <article
              key={data.data._id}
              className={`flex flex-col items-center md:flex-row md:items-start py-3
         justify-around  overflow-hidden`}
            >
              <div className={`w-full md:w-[50%] h-[250px] `}>
                <img
                  src={`http://localhost:4000/uploads/image/${data.data.image}`}
                  className={`w-full h-full object-contain`}
                />
              </div>
              {/* ------------------- details--------------------*/}
              <div
                className={`w-full md:w-[50%]  text-left px-2 py-1 rounded overflow-hidden`}
              >
                <h1
                  className={`font-bold capitalize text-xl text-azure-radiance-900`}
                >
                  {data.data.name}
                </h1>
                <div className={`my-2`}>
                  {data.data.discount > 0 ? (
                    <span className={`flex flex-col gap-1`}>
                      <span>
                        Old Price
                        <span className="line-through text-red-500 ml-1">
                          {data.data.price}
                        </span>
                      </span>
                      <span className={`font-bold capitalize text-green-500`}>
                        discount %
                        {discountPercent(data.data.discount / data.data.price)}
                      </span>
                      <span className="font-medium text-azure-radiance-950">
                        New Price $ {data.data.discount}
                      </span>
                    </span>
                  ) : (
                    <span className="">Price ${data.data.price}</span>
                  )}
                </div>
                <div className={`text-slate-700 mb-2`}>
                  <h1 className={`text-lg font-semibold`}>Details</h1>

                  <div className={``}>
                    {ReadMore(data.data.description)}
                    <button
                      className="font-semibold ml-2"
                      onClick={() => setIsTruncated(isTruncated ? false : true)}
                    >
                      {isTruncated ? "Read more ...." : "Read less"}
                    </button>
                  </div>
                </div>
                <div className={`flex flex-col sm:flex-row gap-2`}>
                  <button
                    id={data.data._id}
                    onClick={(e) => {
                      handlAddToCart(e);
                    }}
                    className={`border w-[100%] border-azure-radiance-500 hover:border-azure-radiance-600
               text-azure-radiance-500 hover:text-azure-radiance-600 font-bold py-2 px-4 rounded`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          )
        )}
      </section>
      <Footer />
    </main>
  );
}

export default SingleItem;
