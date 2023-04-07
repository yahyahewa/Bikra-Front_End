import React, { useState } from "react";
import Filter from "./Filter";
import Navbar from "./MainNavbar";
import "./components.css";
import { Link, useParams } from "react-router-dom";

function ItemPage() {
  const { categorey } = useParams();
  const items = [
    {
      id: 1,
      name: "cleaning",
      price: 34,
      discount: 0,
      category: 4,
      shop_id: 1,
      hashtag: ["clothes", "fashion"],
      number: 3,
      image: [
        "https://p1.hiclipart.com/preview/205/943/762/kitchen-cleaning-cleaning-agent-colorado-floor-cleaning-chemical-industry-cleaner-home-png-clipart.jpg",
        "",
      ],
      date: "6/4/2023",
      time: "11:59 pm",
      rating: [1, 5, 3, 4, 2],
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus inventore quas, impedit quibusdam eum reprehenderit dolorum vitae architecto, dicta a quaerat nisi. Molestias maxime facere dolores maiores dicta tenetur impedit?",
    },
    {
      id: 2,
      name: "hoodie",
      price: 34,
      discount: 10,
      category: 1,
      shop_id: 1,
      hashtag: ["clothes", "fashion"],
      number: 3,
      image: [
        "https://png.pngtree.com/png-vector/20211020/ourmid/pngtree-hoodie-jumper-jacket-mockup-png-image_3992024.png",
        "",
      ],
      date: "6/4/2023",
      time: "11:59 pm",
      rating: [1, 5, 3, 4, 2],
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus inventore quas, impedit quibusdam eum reprehenderit dolorum vitae architecto, dicta a quaerat nisi. Molestias maxime facere dolores maiores dicta tenetur impedit?",
    },
    {
      id: 3,
      name: "nourish",
      price: 100,
      discount: 12,
      category: 2,
      shop_id: 1,
      hashtag: ["clothes", "fashion"],
      number: 3,
      image: [
        "https://img.lovepik.com/free-png/20211225/lovepik-skin-care-products-png-image_400420780_wh300.png",
        "",
      ],
      date: "6/4/2023",
      time: "11:59 pm",
      rating: [1, 5, 0, 1, 2],
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus inventore quas, impedit quibusdam eum reprehenderit dolorum vitae architecto, dicta a quaerat nisi. Molestias maxime facere dolores maiores dicta tenetur impedit?",
    },
    {
      id: 4,
      name: "catridge",
      price: 55,
      discount: 13,
      category: 2,
      shop_id: 1,
      hashtag: ["clothes", "fashion"],
      number: 3,
      image: [
        "https://img.lovepik.com/free-png/20211225/lovepik-skin-care-products-png-image_400420711_wh300.png",
        "",
      ],
      date: "6/4/2023",
      time: "11:59 pm",
      rating: [1, 5, 5, 5, 5],
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus inventore quas, impedit quibusdam eum reprehenderit dolorum vitae architecto, dicta a quaerat nisi. Molestias maxime facere dolores maiores dicta tenetur impedit?",
    },
    {
      id: 5,
      name: "black sofa",
      price: 1355,
      discount: 999,
      category: 4,
      shop_id: 1,
      hashtag: ["clothes", "fashion"],
      number: 3,
      image: [
        "https://img.lovepik.com/free-png/20220108/lovepik-furniture-photography-png-image_401264624_wh300.png",
        "",
      ],
      date: "6/4/2023",
      time: "11:59 pm",
      rating: [1, 5, 3, 4, 2, 3, 3, 3],
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus inventore quas, impedit quibusdam eum reprehenderit dolorum vitae architecto, dicta a quaerat nisi. Molestias maxime facere dolores maiores dicta tenetur impedit?",
    },
    {
      id: 6,
      name: "iphone 14plus",
      price: 999,
      discount: 0,
      category: 3,
      shop_id: 1,
      hashtag: ["clothes", "fashion"],
      number: 3,
      image: [
        "https://lookagain.scene7.com/is/image/OttoUK/170w/iPhone-14-Plus-128GB-Blue-by-Apple~33J630FRSP.jpg",
        "",
      ],
      date: "6/4/2023",
      time: "11:59 pm",
      rating: [1, 5, 3, 4, 2, 5, 5, 4, 4],
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus inventore quas, impedit quibusdam eum reprehenderit dolorum vitae architecto, dicta a quaerat nisi. Molestias maxime facere dolores maiores dicta tenetur impedit?",
    },
    {
      id: 7,
      name: "mac",
      price: 2299,
      discount: 1999,
      category: 3,
      shop_id: 1,
      hashtag: ["clothes", "fashion"],
      number: 3,
      image: [
        "https://w7.pngwing.com/pngs/87/717/png-transparent-apple-mac-apple-product-design-products-of-modern-technology-large-size-tablet-smart-device-product-kind-apple-iphone.png",
        "",
      ],
      date: "6/4/2023",
      time: "11:59 pm",
      rating: [1, 5, 3, 4, 2],
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus inventore quas, impedit quibusdam eum reprehenderit dolorum vitae architecto, dicta a quaerat nisi. Molestias maxime facere dolores maiores dicta tenetur impedit?",
    },
    {
      id: 8,
      name: "rolex watch",
      price: 34,
      discount: 0,
      category: 5,
      shop_id: 1,
      hashtag: ["clothes", "fashion"],
      number: 3,
      image: [
        "https://icon2.cleanpng.com/20171220/hsq/wristwatch-png-image-5a3a436f1921d2.247892471513767791103.jpg",
        "",
      ],
      date: "6/4/2023",
      time: "11:59 pm",
      rating: [1, 5, 3, 4, 2],
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus inventore quas, impedit quibusdam eum reprehenderit dolorum vitae architecto, dicta a quaerat nisi. Molestias maxime facere dolores maiores dicta tenetur impedit?",
    },
    {
      id: 9,
      name: "dress",
      price: 34,
      discount: 0,
      category: 1,
      shop_id: 1,
      hashtag: ["clothes", "fashion"],
      number: 3,
      image: [
        "https://w7.pngwing.com/pngs/978/410/png-transparent-wedding-dress-clothing-gown-gown-fashion-vintage-clothing-woman-thumbnail.png",
        "",
      ],
      date: "6/4/2023",
      time: "11:59 pm",
      rating: [1, 5, 3, 4, 2],
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus inventore quas, impedit quibusdam eum reprehenderit dolorum vitae architecto, dicta a quaerat nisi. Molestias maxime facere dolores maiores dicta tenetur impedit?",
    },
    {
      id: 10,
      name: "shooes",
      price: 34,
      discount: 0,
      category: 1,
      shop_id: 1,
      hashtag: ["clothes", "fashion"],
      number: 3,
      image: [
        "https://image.similarpng.com/very-thumbnail/2022/02/Woman-fashion-shoes-high-heels-on-transparent-background-PNG.png",
        "",
      ],
      date: "6/4/2023",
      time: "11:59 pm",
      rating: [1, 5, 3, 4, 2],
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus inventore quas, impedit quibusdam eum reprehenderit dolorum vitae architecto, dicta a quaerat nisi. Molestias maxime facere dolores maiores dicta tenetur impedit?",
    },
    {
      id: 11,
      name: "polo shirt",
      price: 34,
      discount: 0,
      category: 1,
      shop_id: 1,
      hashtag: ["clothes", "fashion"],
      number: 3,
      image: [
        "https://www.pngfind.com/pngs/m/55-552313_polo-shirt-png-image-men-polo-shirts-png.png",
        "",
      ],
      date: "6/4/2023",
      time: "11:59 pm",
      rating: [1, 5, 3, 4, 2],
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus inventore quas, impedit quibusdam eum reprehenderit dolorum vitae architecto, dicta a quaerat nisi. Molestias maxime facere dolores maiores dicta tenetur impedit?",
    },
  ];
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
  function discountPercent(value) {
    value = String(100 - value * 100);
    return value.slice(0, 2);
  }
  return (
    <div className={`max-w-[1500px] m-auto`}>
      <Navbar showFilterButton="sm:hidden" />
      <section
        className={`flex flex-row justify-evenly items-start gap-3 mt-4`}
      >
        <aside
          className={`overflow-hidden w-fit sm:w-[300px]
          relative h-full hidden md:block mt- border shadow-2xl ml-3 rounded-xl`}
        >
          <Filter />
        </aside>
        {/* -------------------------items------------------------------- */}
        <section
          className={`flex flex-wrap gap-3 w-full justify-evenly border shadow-2xl rounded-xl sm:mr-3`}
        >
          {items.map((value) => {
            if (!categorey) {
              return (
                <article
                  key={value.id}
                  className={`overflow-hidden rounded-xl w-[90%] sm:w-[45%] lg:w-[30%] xl:w-[23%]
              shadow-xl h-[250px] sm:h-[350px] flex flex-row sm:flex-col sm:items-center relative  mt-4
               hover:mt-[10px] hover:shadow-2xl ease-out duration-300`}
                >
                  <div
                    className={`w-[50%] sm:w-[90%] mt-2 h-[200px] sm:h-[180px] relative`}
                  >
                    <img
                      className={`w-full h-full object-cover`}
                      src={value.image[0]}
                    />
                    <h1
                      className="absolute bg-blue-900 text-cus-white-50 px-2
                    top-1 right-1 sm:bottom-1 sm:top-auto sm:left-1 sm:right-auto py-1 rounded-lg "
                    >
                      {value.discount > 0 ? (
                        <span className={`flex gap-1`}>
                          <span className="line-through text-azure-radiance-100">
                            ${value.price}
                          </span>
                          <span className={`font-bold`}>
                            %{discountPercent(value.discount / value.price)}
                          </span>
                          <span className="font-medium">${value.discount}</span>
                        </span>
                      ) : (
                        <span className="">${value.price}</span>
                      )}
                    </h1>
                  </div>
                  {/* ---------------- deatails------------------ */}
                  <div className={` w-[48%] sm:w-[90%] h-fit mt-0 p-1 ml-1`}>
                    <h1 className={`font-bold text-azure-radiance-950`}>
                      {value.name}
                    </h1>
                    <p
                      className={`text-sm  overflow-hidden mt-2
                      text-slate-700 `}
                    >
                      {readMore(value.discription)}. . . . .
                    </p>
                    <div className={`flex justify-start text-yellow-400 mt-2`}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star text-azure-radiance-950"></i>
                      <i className="fa-solid fa-star text-azure-radiance-950"></i>
                    </div>
                  </div>
                  <Link
                    to={`/singleitem/${value.id}`}
                    className={`absolute left-0 bottom-0 text-center w-[100%]
                 bg-azure-radiance-900 py-1 font-semibold text-lg capitalize text-white`}
                  >
                    show
                  </Link>
                </article>
              );
            } else if (value.category == categorey) {
              return (
                <article
                  key={value.id}
                  className={`overflow-hidden rounded-xl w-[90%] sm:w-[45%] lg:w-[30%] xl:w-[23%]
              shadow-xl h-[250px] sm:h-[350px] flex flex-row sm:flex-col sm:items-center relative  mt-4
               hover:mt-[10px] hover:shadow-2xl ease-out duration-300`}
                >
                  <div
                    className={`w-[50%] sm:w-[90%] mt-2 h-[200px] sm:h-[180px] relative`}
                  >
                    <img
                      className={`w-full h-full object-cover`}
                      src={value.image[0]}
                    />
                    <h1
                      className="absolute bg-blue-900 text-cus-white-50 px-2
                    top-1 right-1 sm:bottom-1 sm:top-auto sm:left-1 sm:right-auto py-1 rounded-lg "
                    >
                      {value.discount > 0 ? (
                        <span className={`flex gap-1`}>
                          <span className="line-through text-azure-radiance-100">
                            ${value.price}
                          </span>
                          <span className={`font-bold`}>
                            %{discountPercent(value.discount / value.price)}
                          </span>
                          <span className="font-medium">${value.discount}</span>
                        </span>
                      ) : (
                        <span className="">${value.price}</span>
                      )}
                    </h1>
                  </div>
                  {/* ---------------- deatails------------------ */}
                  <div className={` w-[48%] sm:w-[90%] h-fit mt-0 p-1 ml-1`}>
                    <h1 className={`font-bold text-azure-radiance-950`}>
                      {value.name}
                    </h1>
                    <p
                      className={`text-sm  overflow-hidden mt-2
                      text-slate-700 `}
                    >
                      {readMore(value.discription)}. . . . .
                    </p>
                    <div className={`flex justify-start text-yellow-400 mt-2`}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star text-azure-radiance-950"></i>
                      <i className="fa-solid fa-star text-azure-radiance-950"></i>
                    </div>
                  </div>
                  <Link
                    to={`/singleitem/${value.id}`}
                    className={`absolute left-0 bottom-0 text-center w-[100%]
                 bg-azure-radiance-900 py-1 font-semibold text-lg capitalize text-white`}
                  >
                    show
                  </Link>
                </article>
              );
            }
          })}
        </section>
      </section>
    </div>
  );
}

export default ItemPage;
