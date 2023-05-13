import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Navbar from "./MainNavbar";
import "./components.css";
import Loding from "./Loading";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Pagination from "./Pagination";
import { userData } from "../Slice/userSlice";
import { useGetSomeItemForHomeQuery } from "../app/api/productEndPoint";
import { useAddToCartMutation } from "../app/api/orderEndpoint";
import { useGetUserInformationQuery } from "../app/api/LoginAndSignUpEndPopiant";
import { useDispatch, useSelector } from "react-redux";

function ItemPage({ scrol }) {
  const custID = useSelector((state) => state.user?.user?._id);
  if (scrol) {
    window.scrollTo({ top: 0 });
  }
  const { categorey } = useParams();
  const [addToCart] = useAddToCartMutation();
  const dispatch = useDispatch();
  const [filterAndPagination, setFilterAndPagination] = useState({
    page: 1,
    limit: 12,
    search: "",
    category: categorey,
  });
  const {
    data: userInformation,
    isError: isUSerError,
    isLoading: isUserLoading,
  } = useGetUserInformationQuery();
  console.log();
  useEffect(() => {
    if (!isUSerError && !isUserLoading) {
      dispatch(userData(userInformation?.data));
    }
  }, [userInformation]);
  const { data, isLoading, isError } =
    useGetSomeItemForHomeQuery(filterAndPagination);
  // add to card function
  const handlAddToCart = (e) => {
    if (custID) {
      addToCart({
        product: e.target.id,
        customer: custID,
      });
    }
  };
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
  const handleChnageData = (val) => {
    setFilterAndPagination({
      ...filterAndPagination,
      page: val,
    });
  };
  function discountPercent(value) {
    value = String(100 - value * 100);
    return value.slice(0, 2);
  }
  const handleGetSearchData = (e) => {
    setFilterAndPagination({
      ...filterAndPagination,
      search: e.target.value,
    });
  };

  return (
    <div className={`max-w-[1500px] m-auto`}>
      <Navbar
        showSearchbar={true}
        searchHandl={handleGetSearchData}
        showFilterButton="sm:hidden"
      />
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
            data?.data.map((value) => {
              {
                return (
                  <div
                    key={value._id}
                    className={`flex flex-col h-[350px] w-full sm:w-[45%] md:w-[45%] lg:w-[30%]
                    xl:w-[23%]
                    rounded-xl border relative overflow-hidden`}
                  >
                    {/* imgae ----------------------- image */}
                    <div className={`w-[100%]  border-b relative`}>
                      <img
                        src={`http://localhost:4000/uploads/image/${value.image}`}
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
                        {readMore(value.description)} ....
                      </h1>
                      <div className="flex items-center absolute bottom-0 left-0 w-full">
                        <Link
                          key={value._id}
                          className={`w-[50%] text-center border py-1`}
                          to={`/singleitem/${value._id}`}
                        >
                          show
                        </Link>
                        <button
                          id={value._id}
                          onClick={(e) => {
                            handlAddToCart(e);
                          }}
                          className={`w-[50%] border border-jaguar-500 text-white bg-jaguar-500 py-1`}
                        >
                          Card
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          )}
        </section>
      </section>

      <Pagination
        lenght={data?.results}
        pagination={handleChnageData}
        pageIndex={filterAndPagination.page}
      />
      <Footer />
    </div>
  );
}

export default ItemPage;
