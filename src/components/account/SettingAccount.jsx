import React, { useState } from "react";
import ShopInformation from "./AccSetting/ShopInformation";
function ConfigerAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [Webdata, setData] = useState({
    name: "",
    username: "",
    email: "",
  });
  const [isShow, setShow] = useState([false, false, false]);
  function openPanel(index) {
    const updatedShow = isShow.map((value, i) => {
      if (i === index) {
        return !value;
      } else {
        return false;
      }
    });
    setShow(updatedShow);
  }
  return (
    <section
      className={`w-full  pt-[70px] ease-in-out duration-300 transition-all`}
    >
      <header>
        <h1 className={`m-1 ml-3 font-semibold text-xl`}>
          Configure Your Account
        </h1>
      </header>

      <div className={`w-full flex flex-col items-center`}>
        <article
          className={`w-full
          ${isShow[0] ? `h-auto` : `h-[50px]`}  ease-in-out duration-300`}
        >
          <button
            className={`border rounded-2xl py-2 px-3 m-1 block bg-jaguar-400 hover:bg-jaguar-500  
            font-bold capitalize hover:scale-[0.99] text-bold text-white shadow ease-in-out duration-300`}
            onClick={() => {
              openPanel(0);
            }}
          >
            chnage profile information
          </button>
          {isShow[0] && <ShopInformation />}
        </article>
        <article
          className={`w-full
          ${isShow[1] ? `h-auto` : `h-[50px]`}  ease-in-out duration-300`}
        >
          <button
            className={`border rounded-2xl py-2 px-3 m-1 block bg-jaguar-400 hover:bg-jaguar-500  
            font-bold capitalize hover:scale-[0.99] text-bold text-white shadow ease-in-out duration-300`}
            onClick={() => {
              openPanel(1);
            }}
          >
            chnage Email
          </button>
          {isShow[1] && (
            <div
              className={`w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] m-2 pl-2  rounded-2xl flex flex-col`}
            >
              <div className="w-full flex flex-col gap-1 justify-center items-start mt-4">
                <h1 className="text- font-bold text-slate-700 ml-1 mt-3">
                  New Email
                </h1>
                <input
                  type="text"
                  placeholder="enter new email"
                  className="w-full border-[2px] py-1 pl-2 rounded-xl outline-none "
                />
                <h1 className="text- font-bold text-slate-700 ml-1 mt-3">
                  Password
                </h1>
                <input
                  type="password"
                  placeholder="enter password"
                  className="w-full border-[2px] py-1 pl-2 rounded-xl outline-none "
                />
                <button className="w-full bg-jaguar-400 hover:bg-jaguar-500 text-white font-bold py-2 px-4 rounded-2xl mt-4">
                  Change Email
                </button>
              </div>
            </div>
          )}
        </article>
        <article
          className={`w-full
          ${isShow[1] ? `h-auto` : `h-[50px]`}  ease-in-out duration-300`}
        >
          <button
            className={`border rounded-2xl py-2 px-3 m-1 block bg-jaguar-400 hover:bg-jaguar-500  
            font-bold capitalize hover:scale-[0.99] text-bold text-white shadow ease-in-out duration-300`}
            onClick={() => {
              openPanel(2);
            }}
          >
            chnage password
          </button>
          {isShow[2] && (
            <div
              className={`w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] m-2 pl-2  rounded-2xl flex flex-col`}
            >
              <div className="w-full flex flex-col gap-1 justify-center items-start mt-4">
                <h1 className="text- font-bold text-slate-700 ml-1 mt-3">
                  New Password
                </h1>
                <input
                  type="password"
                  placeholder="enter new password"
                  className="w-full border-[2px] py-1 pl-2 rounded-xl outline-none "
                />
                <h1 className="text- font-bold text-slate-700 ml-1 mt-3">
                  Confirm Password
                </h1>
                <input
                  type="password"
                  placeholder="enter confirm password"
                  className="w-full border-[2px] py-1 pl-2 rounded-xl outline-none "
                />
                <h1 className="text- font-bold text-slate-700 ml-1 mt-3">
                  Old Password
                </h1>
                <input
                  type="password"
                  placeholder="enter old password"
                  className="w-full border-[2px] py-1 pl-2 rounded-xl outline-none "
                />
                <button
                  className="w-full bg-jaguar-400 hover:bg-jaguar-500
                 text-white font-bold py-2 px-4 rounded-2xl mt-4"
                >
                  Change Password
                </button>
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export default ConfigerAccount;
