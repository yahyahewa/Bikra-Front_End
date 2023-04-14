import React, { useState } from "react";
import MainNavbr from "./MainNavbar";
import image from "../assets/images/login.svg";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../Slice/userslice";
import Button from "./Button";
function Login() {
  const [showPass, setShowPass] = useState(false);
  const isLogin = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  function handlClick() {
    isLogin ? dispatch(logout()) : dispatch(login());
  }
  return (
    <section>
      <MainNavbr />
      <section
        className={`w-[95%] md:w-[90%] m-auto flex flex-col md:flex-row 
        items-center justify-between`}
      >
        <article className={`hidden md:block w-[45%]`}>
          <img src={image} className={`w-full h-full`} />
        </article>
        <article
          className={`w-[90%] sm:w-[70%] md:w-[45%] flex flex-col items-start justify-center 
          py-3 px-1`}
        >
          <h1 className={`text-2xl ml-1 mb-3`}>Login</h1>
          <div className={`w-full mt-5`}>
            <h1 className={`ml-2 mb-1`}>Email</h1>
            <div
              className={`border w-full h-[3rem] overflow-hidden rounded-[3rem] border-gray-300`}
            >
              <input
                type={`email`}
                className={`w-full pl-3 p-[2px] h-full outline-none`}
                placeholder="emailexample@example.com"
              />
            </div>
          </div>
          <div className={`w-full mt-6`}>
            <h1 className={`ml-2 mb-1`}>Password</h1>
            <div
              className={`border w-full h-[3rem] overflow-hidden rounded-[3rem] border-gray-300
               flex items-center`}
            >
              <input
                type={showPass ? `text` : `password`}
                className={`w-full pl-3 p-[2px] h-full outline-none`}
                placeholder="O O O O O O O O"
              />
              <button
                onClick={() => {
                  setShowPass((prv) => !prv);
                }}
              >
                {showPass ? (
                  <i className="fa-regular fa-eye mr-3 "></i>
                ) : (
                  <i className="fa-regular fa-eye-slash mr-3 "></i>
                )}
              </button>
            </div>
          </div>
          <div className={`w-full mt-6`}>
            <Button
              type="button"
              content="Login"
              cssStyle={`w-full border-none  h-[3rem] bg-jaguar-400 font-semibold rounded-[3rem]
                 text-jaguar-50 hover:bg-jaguar-500 ease-in-out duration-300
                  hover:scale-[0.99] hover:shadow-lg`}
              onClick={handlClick}
            />
          </div>
        </article>
      </section>
    </section>
  );
}

export default Login;
