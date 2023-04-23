import React, { useState } from "react";

function ShopInformation() {
  const [logo, setlogo] = useState(
    "https://media.istockphoto.com/id/1370772148/photo/track-and-mountains-in-valle-del-lago-somiedo-nature-park-asturias-spain.jpg?s=612x612&w=0&k=20&c=QJn62amhOddkJSbihcjWKHXShMAfcKM0hPN65aCloco="
  );
  return (
    <div
      className={`w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] m-2 pl-2  rounded-2xl flex flex-col`}
    >
      <h1 className="text-xl mt-2 ml-2 font-bold text-slate-700">
        Shop Information
      </h1>
      <div className="w-full flex flex-col gap-1 justify-center items-start mt-4">
        <h1 className="text- font-bold text-slate-700 ml-1 mt-3">Shop Name</h1>
        <input
          type="text"
          className="w-full border-[2px] py-1 pl-2 rounded-xl outline-none "
        />
        <h1 className="text- font-bold text-slate-700 ml-1 mt-3">Shop logo</h1>
        <div className="w-[200px] h-[200px] m-auto object-fill overflow-hidden border rounded-full">
          <img src={logo} alt="" className={`w-full h-full`} />
        </div>
        <input
          onChange={(e) => setlogo(URL.createObjectURL(e.target.files[0]))}
          type="file"
          className="w-full border-[2px] py-1 pl-2 rounded-xl outline-none "
        />
      </div>
    </div>
  );
}

export default ShopInformation;
