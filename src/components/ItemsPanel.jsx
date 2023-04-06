import React from "react";
// import mage from "../assets/images/company.png";
import "./components.css";
function Items(props) {
  const mage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThR55ZRaM53TW0VWVWqtV2SKWE4D2Gi9cq7w&usqp=CAU";
  const item = [2, 3, 4, 5, 6, 7, 8, 91];
  return (
    <section
      className="flex items flex-wrap sm:flex-row w-full  lg:w-[90%]
     items-start justify-evenly relative m-auto mt-10 pt-5 gap-[2px] max-w-[1500px]"
    >
      <h1 className={props.class}>{props.text}</h1>
      {item.map((index) => {
        return (
          <article
            key={index}
            className={`overflow-hidden rounded-xl w-[90%] sm:w-[45%] lg:w-[30%] xl:w-[23%]
            shadow-xl h-[350px] relative  mt-4 hover:mt-[10px] hover:shadow-2xl ease-out duration-300 `}
          >
            <img
              className={`w-[90%] m-auto mt-2 h-[180px] object-contain`}
              src={mage}
            />
            <div className={`h-auto max-h-[50px] overflow-hidden`}>
              <h1
                className={`text-center mt-2 text-azure-radiance-900 font-semibold capitalize`}
              >
                name of products name of produc
              </h1>
            </div>
            <h1
              className={`text-2xl text-center mt-2 font-extrabold text-azure-radiance-950`}
            >
              $1200
            </h1>
            <div className={`flex justify-center text-yellow-400 mt-3`}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star text-azure-radiance-950"></i>
              <i className="fa-solid fa-star text-azure-radiance-950"></i>
            </div>
            <button
              className={`absolute left-0 bottom-0 text-center w-[100%]
               bg-azure-radiance-900 py-1 font-semibold text-lg capitalize text-white`}
            >
              show
            </button>
          </article>
        );
      })}
    </section>
  );
}

export default Items;
