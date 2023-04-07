import React from "react";

function Footer() {
  return (
    <footer className={`w-full mt-10 h-auto`}>
      <div className={`w-full h-8 bg-blue-200`}></div>
      <section
        className={`w-full bg-big-stone-800 flex flex-col 
        gap-y-3 sm:gap-1 sm:flex-row justify-evenly py-2 pl-3`}
      >
        <article className={`w-[95%] m-auto mt-3 sm:w-[23%] text-cus-white-50`}>
          <button
            className={`font-bold rounded-2xl hover:bg-slate-500 sm:hover:bg-transparent
             transition-all w-full flex justify-between sm:justify-start sm:gap-x-2 p-2 items-center`}
          >
            <h1>Shop</h1>
            <i
              className={`fa ml-2 fa-chevron-down ease-in-out duration-300 `}
            ></i>
          </button>
          <div
            className={`flex flex-col w-full items-start mt-4 gap-y-2
           text-sm overflow-hidden mb-3 h-1 sm:h-auto`}
          >
            <button className={`border-b`}>Gift cards</button>
            <button className={`border-b`}>Sitemap</button>
            <button className={`border-b`}>Bika blog</button>
            <button className={`border-b`}>Bikra Iraq</button>
            <button className={`border-b`}>Bikra kurdstan</button>
          </div>
        </article>
        <article className={`w-[95%] m-auto mt-3 sm:w-[23%] text-cus-white-50`}>
          <button
            className={`font-bold rounded-2xl hover:bg-slate-500 sm:hover:bg-transparent
             transition-all w-full flex justify-between sm:justify-start sm:gap-x-2 p-2 items-center`}
          >
            <h1>Sell</h1>
            <i
              className={`fa ml-2 fa-chevron-down ease-in-out duration-300 `}
            ></i>
          </button>
          <div
            className={`flex flex-col w-full items-start mt-4 gap-y-2
           text-sm overflow-hidden mb-3 h-1 sm:h-auto`}
          >
            <button className={`border-b`}>Sell on Bikra</button>
            <button className={`border-b`}>Team</button>
            <button className={`border-b`}>Forums</button>
            <button className={`border-b`}>Affiliates & Creators</button>
          </div>
        </article>
        <article className={`w-[95%] m-auto mt-3 sm:w-[23%] text-cus-white-50`}>
          <button
            className={`font-bold rounded-2xl hover:bg-slate-500 sm:hover:bg-transparent
             transition-all w-full flex justify-between sm:justify-start sm:gap-x-2 p-2 items-center`}
          >
            <h1> About</h1>
            <i
              className={`fa ml-2 fa-chevron-down ease-in-out duration-300 `}
            ></i>
          </button>
          <div
            className={`flex flex-col w-full items-start mt-4 gap-y-2
           text-sm overflow-hidden mb-3 h-1 sm:h-auto`}
          >
            <button className={`border-b`}>Bikra, Inc</button>
            <button className={`border-b`}>Policies</button>
            <button className={`border-b`}>Investors</button>
            <button className={`border-b`}>Careers</button>
            <button className={`border-b`}>Press</button>
            <button className={`border-b`}>Impact</button>
            <button className={`border-b`}>Legal imprint</button>
          </div>
        </article>
        <article className={`w-[95%] m-auto mt-3 sm:w-[23%] text-cus-white-50`}>
          <button
            className={`font-bold rounded-2xl hover:bg-slate-500 sm:hover:bg-transparent
             transition-all w-full flex justify-between sm:justify-start sm:gap-x-2 p-2 items-center`}
          >
            <h1>Help</h1>
            <i
              className={`fa ml-2 fa-chevron-down ease-in-out duration-300`}
            ></i>
          </button>
          <div
            className={`flex flex-col w-full items-start mt-4 gap-y-2
           text-sm overflow-hidden mb-3 h-1 sm:h-auto`}
          >
            <button className={`border-b`}>Help Center</button>
            <button className={`border-b`}>Privacy settings</button>
          </div>
        </article>
      </section>
      <article
        className={`bg-big-stone-800 flex justify-center gap-x-5 items-center text-cus-white-50
         h-[50px]`}
      >
        <i className="fa-brands hover:scale-105 transition-all fa-facebook fa-2xl"></i>
        <i className="fa-brands hover:scale-105 transition-all fa-square-instagram fa-2xl"></i>
        <i className="fa-brands hover:scale-105 transition-all fa-square-twitter fa-2xl"></i>
        <i className="fa-brands hover:scale-105 transition-all fa-linkedin fa-2xl"></i>
      </article>
      <article
        className={`w-full bg-big-stone-900 p-2 flex justify-center items-center text-cus-white-50`}
      >
        <h1>
          <i class="fa-solid mx-3 fa-earth-americas fa-2xs"> Iraq</i>
          <i class="fa-solid mx-3 fa-copyright fa-xs"> 2023 Bikra, Inc</i>
        </h1>
      </article>
    </footer>
  );
}

export default Footer;
