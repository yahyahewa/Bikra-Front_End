import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Aside from "./Aside";
function SingleItem() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    "Clothing",
    "Beauty",
    "Toys and Games",
    "Books and Stationery",
  ];
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const data = [
    {
      id: 1,
      name: "product1",
      price: 100,
      discount: 50,
      image: "https://picsum.photos/1000/1000",
      rating: [0, 0, 0, 1, 5],
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
  ];
  const { id } = useParams();
  return (
    <section className={`flex justify-start items-start`}>
      <Aside />
      <div
        className={`flex flex-col m-auto my-5 w-[90%] border overflow-hidden rounded-2xl sm:w-[70%] md:w-[60%] lg:w-[40%]
        `}
      >
        {/* ---------------- image------------------------ */}
        <div className={`w-full h-[250px]`}>
          <img src={data[0].image} className={`w-full h-full object-cover`} />
        </div>

        {/* ---------------- ------Change image--------------------------------- */}
        <h1 className={`ml-1 mt-2 text-slate-700 font-bold`}>Change image</h1>
        <input
          type="file"
          className={`w-full h-10 pt-1  hover:bg-jaguar-500 ease-in-out
          duration-300 text-slate-700 hover:text-white`}
        />
        {/* ---------------- detail and edite------------------------ */}
        <div className={`w-full flex flex-col px-1 py-1 gap-1 mt-1`}>
          <h1 className={`ml-1 text-slate-700 font-bold`}>Product name</h1>
          <h1 className={`ml-1 font-semibold text-slate-700`}>
            {data[0].name}
          </h1>
          <h1 className={`ml-1 text-slate-700 font-bold`}>
            Change Product Name to
          </h1>
          <input
            type="text"
            placeholder="enter new name"
            className={`w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none `}
          />
          {/* ---------------- ------Category--------------------------------- */}

          <div className="w-full mt-4  pb-1">
            <h1 className={` font-bold  text-slate-700`}>Select Categoreis</h1>
            <button
              className=" w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOption || "All Categoreis"}
              <i
                className={`fa ml-2 fa-chevron-down ease-in-out duration-300 ${
                  isOpen ? `rotate-[-180deg]` : `rotate-[360deg]`
                }`}
              ></i>
            </button>
            {isOpen && (
              <div className={`text-center`}>
                {options.map((option) => (
                  <div
                    className={`border-b w-fit m-auto`}
                    key={option}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* -------------------------discrption--------------------------------- */}
          <div className={`w-full mt-4 flex flex-col items-start`}>
            <h1 className={` font-bold  text-slate-700`}>Discrption</h1>
            <textarea
              className={`w-full border-[2px] h-[100px] py-1 pl-2 rounded-xl border- outline-none `}
            >
              {data[0].desc}
            </textarea>
          </div>
          {/* -------------------- price and discount ------------------------------- */}
          <div className={`ml-2 mt-4 flex flex-col items-start`}>
            <span
              className={`font-bold text-slate-700 flex items-center justify-start gap-1`}
            >
              Price: ${data[0].price}
              <span className={`ml-2`}>Chnage to</span>
              <input
                type="number"
                min={0}
                className={`w-1/2 ml-2 font-normal pl-2 rounded-xl border-[2px]`}
                placeholder={`enter new price`}
              />
            </span>
            <span className={`font-bold text-slate-700 mt-2`}>
              Discount: ${data[0].discount}
              <span className={`ml-2`}>Chnage to</span>
              <input
                type="number"
                min={0}
                className={`w-1/2 ml-2 font-normal pl-2 rounded-xl border-[2px]`}
                placeholder={`enter new discount`}
              />
            </span>
          </div>
        </div>

        {/* ---------------- ------save chanage--------------------------------- */}
        <button
          className={`w-full h-10 bg-jaguar-400 mt-2 hover:bg-jaguar-500 ease-in-out 
          duration-300 text-white`}
        >
          Save Changes
        </button>
      </div>
    </section>
  );
}

{
  /* {`w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none `} */
}
export default SingleItem;
