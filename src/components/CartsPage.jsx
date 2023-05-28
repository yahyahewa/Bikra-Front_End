import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import MainNavbar from "./MainNavbar";
import Loading from "./Loading";
import {
  useGetItemOrderQuery,
  useDeleteOrderItemMutation,
  useCheckoutMutation,
} from "../app/api/orderEndpoint";
import { useGetUserInformationQuery } from "../app/api/LoginAndSignUpEndPopiant";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../Slice/userSlice";
function AddToCart() {
  const userId = useSelector((state) => state.user.user?._id);
  const [UserVal, setUserVal] = useState();
  const dispatch = useDispatch();
  const [checkout] = useCheckoutMutation();

  const {
    data: userInformation,
    isError: userDataError,
    isLoading: userDataLoading,
  } = useGetUserInformationQuery();

  // inside user data to redux
  dispatch(userData(userInformation?.data));
  useEffect(() => {
    if (!userDataError && !userDataLoading) {
      dispatch(userData(userInformation?.data));
      setUserVal(userInformation?.data._id);
    }
  }, [UserVal]);
  const [deleteItem] = useDeleteOrderItemMutation();
  const [loc, setLoc] = useState({
    long: null,
    lati: null,
  });
  const {
    data: itemList,
    isError: itemError,
    isLoading: itemLoading,
  } = useGetItemOrderQuery(UserVal);

  
  // chekout ------------- chekout-----//
  function handleCheckout() {
    if (userId) {
      checkout({
        customer: userId,
      });
      window.location.reload();
    }
  }
  /// ------- discoutn percent
  function discountPercent(value) {
    value = String(100 - value * 100);
    return value.slice(0, 2);
  }
  const [isTruncated, setIsTruncated] = useState(true);
  function ReadMore(text) {
    return isTruncated ? text.slice(0, 100) : text;
  }

  return (
    <div>
      <MainNavbar />
      <div
        className={`w-[95%] md:w-[90%] text-slate-800 m-auto mt-2 bg-jaguar-50 px-4 py-2 rounded-3xl`}
      >
        <span className={`font-semibold  `}>Buy confidently</span> with Bikra's
        Purchase Protection programme for buyers, get a full refund in the rare
        case your item doesn't arrive, arrives damaged, or isn't as described.
      </div>
      <button
        type="submit"
        onClick={handleCheckout}
        className={`border w-[90%] m-auto block mt-3 text-white bg-jaguar-400
        hover:bg-jaguar-500 hover:scale-[0.99] ease-in-out duration-300 rounded-3xl font-bold py-2 px-4`}
      >
        chuckout
      </button>

      <section className={`m-auto w-[95%] md:w-[90%] mt-5`}>
        {itemError ? (
          ``
        ) : itemLoading ? (
          <Loading />
        ) : (
          itemList?.data?.map((prod) => {
            {
              return prod.product.map((value) => {
                return (
                  <article
                    key={value._id}
                    className={`flex flex-col items-center md:flex-row md:items-start py-3
               justify-around  overflow-hidden`}
                  >
                    <div className={`w-full md:w-[50%] h-[250px] `}>
                      <img
                        src={`http://localhost:4000/uploads/image/${value.image}`}
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
                          {ReadMore(value.description)}
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
                          id={prod._id}
                          type="submit"
                          onClick={(e) => {
                            deleteItem(e.target.id);
                            window.location.reload();
                          }}
                          className={`border w-[100%] border-azure-radiance-500 hover:border-azure-radiance-600
                     text-azure-radiance-500 hover:text-azure-radiance-600 font-bold py-2 px-4  rounded-3xl`}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                );
              });
            }
          })
        )}
      </section>
      <Footer />
    </div>
  );
}

export default AddToCart;
