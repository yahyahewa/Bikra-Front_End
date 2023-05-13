import React, { useState, useEffect } from "react";
import MainNavbr from "./MainNavbar";
import { useSignUpMutation } from "../app/api/LoginAndSignUpEndPopiant";
import signupLogo from "../assets/images/undraw_sign_up_n6im.svg";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../Slice/userslice";
import { Navigate } from "react-router-dom";
export default function CreateWebsite() {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: null,
    password: null,
  });
  const [createAccount, { data, isError, isLoading }] = useSignUpMutation();

  const userdata = useSelector((state) => state.user);
  useEffect(() => {
    localStorage.setItem("user_token", data?.data.token);
    dispatch(userData(data?.data.data));
  }, [data]);
  const handlData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  if (userdata.user) return <Navigate to="/account" />;

  return (
    <section>
      <MainNavbr />
      <h1
        className={`text-center my-10 text-xl md:text-3xl text-jaguar-500 font-semibold`}
      >
        Create a Free Online Shop For Your Business
        <span className={`text-sm text-slate-800 mt-2 block`}>
          you can buy and sales from this account
        </span>
      </h1>
      <section
        className={`w-[95%] md:w-[90%] m-auto  flex flex-col md:flex-row 
        items-center justify-between`}
      >
        <article className={`hidden md:block w-[45%]`}>
          <img src={signupLogo} className={`w-full h-full`} />
        </article>
        <article
          className={`w-[90%] sm:w-[70%] md:w-[45%] flex flex-col items-start justify-center 
          py-3 px-1`}
        >
          <h1 className={`text-2xl ml-1 mb-3`}>Sign up</h1>
          <div className={`w-full mt-5`}>
            {/* --Email------------------------------------- */}
            <h1 className={`ml-2 mb-1`}>Email</h1>
            <div
              className={`border w-full h-[3rem] overflow-hidden rounded-[3rem] border-gray-300`}
            >
              <input
                onKeyUp={handlData}
                type={`email`}
                name="email"
                className={`w-full pl-3 p-[2px] h-full outline-none`}
                placeholder="emailexample@example.com"
              />
            </div>
          </div>
          {/* --Password------------------------------------- */}
          <div className={`w-full mt-6`}>
            <h1 className={`ml-2 mb-1`}>Password</h1>
            <div
              className={`border w-full h-[3rem] overflow-hidden rounded-[3rem] border-gray-300
               flex items-center`}
            >
              <input
                onKeyUp={handlData}
                name="password"
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
            <button
              type="submit"
              onClick={() => {
                createAccount(formData);
              }}
              className={`w-full border-none block h-[3rem] bg-jaguar-400 
              font-semibold rounded-[3rem] text-jaguar-50 hover:bg-jaguar-500 
              ease-in-out duration-300 text-center
                  hover:scale-[0.99] hover:shadow-lg `}
            >
              sign up
            </button>
          </div>
        </article>
      </section>
    </section>
  );
}
