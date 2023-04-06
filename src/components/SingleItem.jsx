import React, { useState } from "react";
import MainNavbar from "./MainNavbar";
import ItemPane from "./ItemsPanel";
function SingleItem() {
  function discountPercent(value) {
    value = String(100 - value * 100);
    return value.slice(0, 2);
  }
  const imw =
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71iyOr0Fg2L._AC_SX425_.jpg";
  const imh = `https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61NGnpjoRDL._AC_SX679_.jpg`;
  const [showFullContent, setShowFullContent] = useState(false);
  const content = `woimwoe oiawemfco;im oiwmekffc;oimwe oi;wemoii;mwe iomkweeldkmcwe oimweoicmwed
  woimwoe oiawemfco;im oiwmekffc;oimwe oi;wemoii;mwe iomkweeldkmcwe oimweoicmwed
  woimwoe oiawemfco;im oiwmekffc;oimwe oi;wemoii;mwe iomkweeldkmcwe oimweoicmwed
  woimwoe oiawemfco;im oiwmekffc;oimwe oi;wemoii;mwe iomkweeldkmcwe oimweoicmwed
  woimwoe oiawemfco;im oiwmekffc;oimwe oi;wemoii;mwe iomkweeldkmcwe oimweoicmwed`;
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  const truncatedContent = content.slice(0, 120);
  return (
    <main>
      <MainNavbar />
      <section
        className={` shadow-2xl w-[95%] md:w-[90%] mt-10 rounded-xl  m-auto`}
      >
        <article
          className={`flex flex-col items-center md:flex-row md:items-start py-3
         justify-around  overflow-hidden`}
        >
          <div className={`w-full md:w-[50%] h-[250px] `}>
            <img src={imw} className={`w-full h-full object-contain`} />
          </div>
          {/* ------------------- details--------------------*/}
          <div
            className={`w-full md:w-[50%]  text-left px-2 py-1 rounded overflow-hidden`}
          >
            <h1 className={`font-bold text-xl text-azure-radiance-900`}>
              Apple Watche
            </h1>
            <div className={`my-2`}>
              {4 % 3 == 1 ? (
                <span className={`flex flex-col gap-1`}>
                  <span>
                    Old Price
                    <span className="line-through text-red-500 ml-1">
                      $3000
                    </span>
                  </span>
                  <span className={`font-bold capitalize text-green-500`}>
                    discount %{discountPercent(2300 / 3000)}
                  </span>
                  <span className="font-medium text-azure-radiance-950">
                    New Price $2300
                  </span>
                </span>
              ) : (
                <span className="">Price $3000</span>
              )}
            </div>
            <div className={`text-slate-700 mb-2`}>
              <h1 className={`text-lg font-semibold`}>Details</h1>
              {showFullContent ? (
                content
              ) : (
                <div className={``}>
                  {truncatedContent}...
                  <button onClick={toggleContent}>
                    <span className={`font-semibold`}>Read more</span>
                  </button>
                </div>
              )}
            </div>
            <div className={`flex flex-col sm:flex-row gap-2`}>
              <button
                className={`bg-azure-radiance-600  w-[100%] hover:bg-azure-radiance-700 text-white font-bold py-2 px-4 rounded`}
              >
                Bay it Now
              </button>
              <button
                className={`border w-[100%] border-azure-radiance-500 hover:border-azure-radiance-600
               text-azure-radiance-500 hover:text-azure-radiance-600 font-bold py-2 px-4 rounded`}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </article>
        <ItemPane
          text="related products"
          class={`absolute left-2 capitalize top-0 
        text-lg md:text-xl text-azure-radiance-800 font-semibold`}
        />
      </section>
    </main>
  );
}

export default SingleItem;
