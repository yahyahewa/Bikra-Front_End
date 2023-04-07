import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
function Items(props) {
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

  function discountPercent(value) {
    value = String(100 - value * 100);
    return value.slice(0, 2);
  }
  return (
    <section
      className="flex items flex-wrap sm:flex-row w-full  lg:w-[90%]
     items-start justify-evenly relative m-auto mt-10 pt-5 gap-[2px] max-w-[1500px]"
    >
      <h1 className={props.class}>{props.text}</h1>
      {items.map((value) => {
        return (
          <Link
            key={value.id}
            to={`/singleitem/${value.id}`}
            className={`overflow-hidden rounded-xl w-[90%] sm:w-[45%] lg:w-[30%] xl:w-[23%]
            shadow-xl h-[350px] relative  mt-4 hover:mt-[10px] hover:shadow-2xl ease-out duration-300 `}
          >
            <article>
              <img
                className={`w-[90%] m-auto mt-2 h-[180px] object-contain`}
                src={value.image[0]}
              />
              <div className={`h-auto max-h-[50px] overflow-hidden`}>
                <h1
                  className={`text-center mt-2 text-azure-radiance-900 font-semibold capitalize`}
                >
                  {value.name}
                </h1>
              </div>
              <h1
                className={` text-center mt-2 font-extrabold text-azure-radiance-950`}
              >
                {value.discount > 0 ? (
                  <span className={`flex flex-col gap-1`}>
                    <span>
                      Old Price
                      <span className="line-through text-red-500 ml-1">
                        {value.price}
                      </span>
                    </span>
                    <span className={`font-bold capitalize text-green-500`}>
                      discount %{discountPercent(value.discount / value.price)}
                    </span>
                    <span className="font-medium text-azure-radiance-950">
                      New Price $ {value.discount}
                    </span>
                  </span>
                ) : (
                  <span className="">Price ${value.price}</span>
                )}
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
          </Link>
        );
      })}
    </section>
  );
}

export default Items;
