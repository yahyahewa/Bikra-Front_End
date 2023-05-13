import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import { useGetRetriveOrderQuery } from "../../app/api/orderEndpoint";
function OrderPanel() {
  const userId = useSelector((state) => state.user.user?._id);
  const { data, isError, isLoading } = useGetRetriveOrderQuery(userId);
  return (
    <div className="w-full flex flex-wrap gap-2">
      {isError ? (
        ``
      ) : isLoading ? (
        <Loading />
      ) : (
        data?.data?.map((prod) => {
          return prod.product.map((value) => {
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
                    src={`http://localhost:4000/uploads/image/${value.image}`}
                    className={`w-full h-[180px] object-cover`}
                  />
                  {value.discount > 0 ? (
                    <span
                      className={`ml-1 text-white font-semibold absolute
                        bottom-1 left-1 p-1 bg-green-700 rounded-xl`}
                    ></span>
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
                  </div>
                </div>
              </div>
            );
          });
        })
      )}
    </div>
  );
}

export default OrderPanel;
