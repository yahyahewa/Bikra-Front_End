import React, { useState } from "react";
import MainNavbar from "./MainNavbar";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
function SingleItem() {
  const items = [
    {
      id: 1,
      name: "cleaning",
      price: 34,
      discount: 0,
      category: "home",
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
      category: "clothes",
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
      category: "clothes",
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
      category: "beauty",
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
      category: "home",
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
      category: "electonic",
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
      category: "electonic",
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
      category: "fashion",
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
      category: "clothes",
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
      category: "fashion",
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
      category: "clothes",
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
  const { id } = useParams();
  function discountPercent(value) {
    value = String(100 - value * 100);
    return value.slice(0, 2);
  }
  const [isTruncated, setIsTruncated] = useState(true);
  function ReadMore(text) {
    return isTruncated ? text.slice(0, 100) : text;
  }
  return (
    <main>
      <MainNavbar />
      <section
        className={` shadow-2xl w-[95%] md:w-[90%] mt-10 rounded-xl  m-auto`}
      >
        {items.map((value) => {
          if (value.id == id)
            return (
              <article
                key={value.id}
                className={`flex flex-col items-center md:flex-row md:items-start py-3
         justify-around  overflow-hidden`}
              >
                <div className={`w-full md:w-[50%] h-[250px] `}>
                  <img
                    src={value.image[0]}
                    className={`w-full h-full object-contain`}
                  />
                </div>
                {/* ------------------- details--------------------*/}
                <div
                  className={`w-full md:w-[50%]  text-left px-2 py-1 rounded overflow-hidden`}
                >
                  <h1
                    className={`font-bold capitalize text-xl text-azure-radiance-900`}
                  >
                    {value.name}
                  </h1>
                  <div className={`my-2`}>
                    {value.discount > 0 ? (
                      <span className={`flex flex-col gap-1`}>
                        <span>
                          Old Price
                          <span className="line-through text-red-500 ml-1">
                            {value.price}
                          </span>
                        </span>
                        <span className={`font-bold capitalize text-green-500`}>
                          discount %
                          {discountPercent(value.discount / value.price)}
                        </span>
                        <span className="font-medium text-azure-radiance-950">
                          New Price $ {value.discount}
                        </span>
                      </span>
                    ) : (
                      <span className="">Price ${value.price}</span>
                    )}
                  </div>
                  <div className={`text-slate-700 mb-2`}>
                    <h1 className={`text-lg font-semibold`}>Details</h1>

                    <div className={``}>
                      {ReadMore(value.discription)}
                      <button
                        className="font-semibold ml-2"
                        onClick={() =>
                          setIsTruncated(isTruncated ? false : true)
                        }
                      >
                        {isTruncated ? "Read more ...." : "Read less"}
                      </button>
                    </div>
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
            );
        })}
      </section>
      <Footer />
    </main>
  );
}

export default SingleItem;
