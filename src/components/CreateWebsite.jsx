import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Button from "./Button";
import MainNavbar from "./MainNavbar";
import { useSignUpMutation } from "../app/api/LoginAndSignUpEndPopiant";
export default function CreateWebsite() {
  let col = "/?id=130";
  const [showPass, setShowPass] = useState(false);
  const [Webdata, setData] = useState({
    name: null,
    username: null,
    password: null,
    email: null,
    phone: null,
    categorey: null,
    address: null,
    long: null,
    lati: null,
    image: null,
    logo: null,
  });
  const [addWebsite] = useSignUpMutation();
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setData({
          ...Webdata,
          lati: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  }
  // create a function for retrive  teestttt

  ///////////////////////////////////////////
  function createAccount() {
    if (!isError) {
      if (!isLoading) {
        let idArray = [0];
        webInfo.map((value) => {
          idArray.push(value.id);
        });
        if (
          Webdata.name != "" &&
          Webdata.password != "" &&
          Webdata.phone != "" &&
          Webdata.categorey != "" &&
          Webdata.email != "" &&
          Webdata.image != null
        ) {
          const maxNumber = Math.max(...idArray);
          addWebsite({ ...Webdata, id: maxNumber + 1 });
        }
      } else {
        <Loading />;
      }
    }
  }
  function convertImage(e, type) {
    let file = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (e) => {
      if (type == "image") {
        setData({ ...Webdata, image: e.target.result });
      } else {
        setData({ ...Webdata, logo: e.target.result });
      }
    };
  }
  return (
    <main>
      <MainNavbar />
      <section id={`CreateWebsite`} className={`mt-[5rem]`}>
        <h1
          className={`text-3xl text-jaguar-400 text-center font-semibold font-sans`}
        >
          Create a Free Website For Your Business
        </h1>
        <section
          className="grid md:grid-cols-2 w-[90%] lg:w-[70%] m-auto mt-5 
      "
        >
          {/* name-------------------------- */}
          <div className={`w-full md:w-[90%] mt-5 `}>
            <h1 className={`ml-2 mb-1  text-jaguar-950`}>Name of Website</h1>
            <div
              className={` border w-full h-[2.5rem] overflow-hidden 
            rounded-[3rem] border-gray-300 
             hover:border-jaguar-400 ease-in-out duration-[400ms] `}
            >
              <input
                onKeyUp={(e) => {
                  setData({ ...Webdata, name: e.target.value });
                }}
                type={`text`}
                className={`w-full p-[2px] pl-3 h-full outline-none lowercase`}
                placeholder="Name of Website"
                required
              />
            </div>
          </div>
          {/* email-------------------------- */}
          <div className={`w-full md:w-[90%] mt-5 `}>
            <h1 className={`ml-2 mb-1  text-jaguar-950`}>Email</h1>
            <div
              className={` border w-full h-[2.5rem] overflow-hidden 
            rounded-[3rem] border-gray-300 
             hover:border-jaguar-400 ease-in-out duration-[400ms] `}
            >
              <input
                onKeyUp={(e) => {
                  setData({ ...Webdata, email: e.target.value });
                }}
                type={`email`}
                className={`w-full p-[2px] pl-3 h-full outline-none lowercase`}
                placeholder="emailexample@example.com"
              />
            </div>
          </div>
          {/* password-------------------------- */}
          <div className={`w-full md:w-[90%] mt-5 `}>
            <h1 className={`ml-2 mb-1  text-jaguar-950`}>Password</h1>
            <div
              className={` border w-full h-[2.5rem] overflow-hidden 
            rounded-[3rem] border-gray-300 
             hover:border-jaguar-400 ease-in-out duration-[400ms] flex`}
            >
              <input
                onKeyUp={(e) => {
                  setData({ ...Webdata, password: e.target.value });
                }}
                type={showPass ? `text` : `password`}
                className={`w-full p-[2px] pl-3 h-full outline-none lowercase`}
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
          {/* phone-------------------------- */}
          <div className={`w-full md:w-[90%] mt-5 `}>
            <h1 className={`ml-2 mb-1  text-jaguar-950`}>Phone</h1>
            <div
              className={` border w-full h-[2.5rem] overflow-hidden 
            rounded-[3rem] border-gray-300 
             hover:border-jaguar-400 ease-in-out duration-[400ms] `}
            >
              <input
                onKeyUp={(e) => {
                  setData({ ...Webdata, phone: e.target.value });
                }}
                type={`tel`}
                className={`w-full p-[2px] pl-3 h-full outline-none lowercase`}
                placeholder="+964 770 030 70 70"
              />
            </div>
          </div>
          {/* addressname-------------------------- */}
          <div className={`w-full md:w-[90%] mt-5 `}>
            <h1 className={`ml-2 mb-1  text-jaguar-950`}>Address Name</h1>
            <div
              className={` border w-full h-[2.5rem] overflow-hidden 
            rounded-[3rem] border-gray-300 
             hover:border-jaguar-400 ease-in-out duration-[400ms] `}
            >
              <input
                type={`text`}
                onKeyUp={(e) => {
                  setData({ ...Webdata, address: e.target.value });
                }}
                className={`w-full p-[2px] pl-3 h-full outline-none lowercase`}
                placeholder="sulaymanyah\ chwarchra main street"
              />
            </div>
          </div>
          {/* location-------------------------- */}
          <div className={`w-full md:w-[90%] mt-5 `}>
            <h1 className={`ml-2 mb-1  text-jaguar-950`}>Location</h1>
            <div
              className={` border w-full h-[2.5rem] overflow-hidden 
            rounded-[3rem]
             -400 ease-in-out duration-[400ms] `}
            >
              <Button
                handClick={getLocation}
                type={`button`}
                cssStyle={`w-full p-[2px]  text-jaguar-900  hover:bg-jaguar-100
                text-[17px] pl-3 h-full outline-none ease-in-out duration-300`}
                content={
                  Webdata.lati
                    ? `Your Loaction  ${Webdata.long}:${Webdata.lati}`
                    : `Get Your Loaction`
                }
              />
            </div>
          </div>
          {/* logo-------------------------- */}
          <div className={`w-full md:w-[90%] mt-5 `}>
            <h1 className={`ml-2 mb-1  text-jaguar-950`}>
              Upload Image for your website
            </h1>
            <div
              className={` border w-full h-[2.5rem] overflow-hidden 
            rounded-[3rem] border-gray-300 
             `}
            >
              <input
                onChange={(e) => {
                  convertImage(e, "logo");
                }}
                type={`file`}
                className={`w-full p-[2px] pl-3 pt-1 h-full outline-none lowercase text-jaguar-900 
               hover:bg-jaguar-100 ease-in-out duration-300 `}
              />
            </div>
          </div>
        </section>
        <Button
          type="button"
          content="Create"
          cssStyle={`w-[90%] md:w-[40%] m-auto block mt-5 border-none h-[2rem] md:h-[2.5rem]
         bg-jaguar-400 font-semibold rounded-[3rem]
                 text-jaguar-50 hover:bg-jaguar-500 ease-in-out duration-300
                  hover:scale-[0.99] hover:shadow-lg`}
          handClick={createAccount}
        />
      </section>
    </main>
  );
}
