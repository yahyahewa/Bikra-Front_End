import React, { useState } from "react";
import MainNavbar from "./MainNavbar";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Loading from "./Loading";
import {
  useGetSingleItemQuery,
  useAddToCartMutation,
  useGetorderQuery,
} from "../app/api/itemEndpoints";
import { useSelector } from "react-redux";
import Button from "./Button";
function SingleItem() {
  const custID = useSelector((state) => state.user.custUserName);
  const [addToCart] = useAddToCartMutation();
  const {
    data: order,
    isLoading: orderLoding,
    isError: orderError,
  } = useGetorderQuery();
  //checking and add items to card if you can add
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
  // ---------------------------------------------
  const { id } = useParams();
  const {
    data: items,
    isLoading: itemsLoding,
    isError,
  } = useGetSingleItemQuery(id);
  function discountPercent(value) {
    value = String(100 - value * 100);
    return value.slice(0, 2);
  }
  const [isTruncated, setIsTruncated] = useState(true);
  function ReadMore(text) {
    return isTruncated ? text.slice(0, 100) : text;
  }
  return (
    <main>
      <MainNavbar />
      <section
        className={` shadow-2xl w-[95%] md:w-[90%] mt-10 rounded-xl  m-auto`}
      >
        {isError ? (
          <h1>Error</h1>
        ) : itemsLoding ? (
          <h1>isLoading....</h1>
        ) : (
          items.map((value) => {
            if (value.id == id)
              return (
                <article
                  key={value.id}
                  className={`flex flex-col items-center md:flex-row md:items-start py-3
         justify-around  overflow-hidden`}
                >
                  <div className={`w-full md:w-[50%] h-[250px] `}>
                    <img
                      src={value.image}
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
                      {value.name}
                    </h1>
                    <div className={`my-2`}>
                      {value.discount > 0 ? (
                        <span className={`flex flex-col gap-1`}>
                          <span>
                            Old Price
                            <span className="line-through text-red-500 ml-1">
                              {value.price}
                            </span>
                          </span>
                          <span
                            className={`font-bold capitalize text-green-500`}
                          >
                            discount %
                            {discountPercent(value.discount / value.price)}
                          </span>
                          <span className="font-medium text-azure-radiance-950">
                            New Price $ {value.discount}
                          </span>
                        </span>
                      ) : (
                        <span className="">Price ${value.price}</span>
                      )}
                    </div>
                    <div className={`text-slate-700 mb-2`}>
                      <h1 className={`text-lg font-semibold`}>Details</h1>

                      <div className={``}>
                        {ReadMore(value.desc)}
                        <button
                          className="font-semibold ml-2"
                          onClick={() =>
                            setIsTruncated(isTruncated ? false : true)
                          }
                        >
                          {isTruncated ? "Read more ...." : "Read less"}
                        </button>
                      </div>
                    </div>
                    <div className={`flex flex-col sm:flex-row gap-2`}>
                      <button
                        className={`bg-azure-radiance-600  w-[100%] hover:bg-azure-radiance-700 text-white font-bold py-2 px-4 rounded`}
                      >
                        Bay it Now
                      </button>
                      <Button
                        handClick={() => {
                          addCardHandle(value.id);
                        }}
                        cssStyle={`border w-[100%] border-azure-radiance-500 hover:border-azure-radiance-600
               text-azure-radiance-500 hover:text-azure-radiance-600 font-bold py-2 px-4 rounded`}
                        content={"Add to Cart"}
                      />
                    </div>
                  </div>
                </article>
              );
          })
        )}
      </section>
      <Footer />
    </main>
  );
}

export default SingleItem;
