import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
function ShopSlide() {
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

  const [slideIndex, setSlideIndex] = useState(0);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTimerPaused) {
        setSlideIndex(
          (prevIndex) =>
            (prevIndex + 1) % Math.ceil(items.length / getItemsPerSlide())
        );
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [isTimerPaused]);

  const handlePrevSlideClick = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(items.length / getItemsPerSlide()) - 1
        : prevIndex - 1
    );
    setIsDark(!isDark);
  };

  const handleNextSlideClick = () => {
    setSlideIndex(
      (prevIndex) =>
        (prevIndex + 1) % Math.ceil(items.length / getItemsPerSlide())
    );
  };

  const handleMouseEnter = () => {
    setIsTimerPaused(true);
  };

  const handleMouseLeave = () => {
    setIsTimerPaused(false);
  };

  const getItemsPerSlide = () => {
    if (window.innerWidth >= 1200) {
      return 5;
    } else if (window.innerWidth >= 768) {
      return 4;
    } else {
      return 2;
    }
  };

  const renderItems = () => {
    const itemsPerSlide = getItemsPerSlide();
    const startIndex = slideIndex * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    const slideItems = items.slice(startIndex, endIndex);

    return slideItems.map((value) => (
      <Link to={`/singleitem/${value.id}`} key={value.id}>
        <div
          key={value.id}
          className={`overflow-hidden
          w-[120px] h-[170px]  p-1 `}
        >
          <img
            src={value.image[0]}
            className={`w-[110px]
             shadow-lg h-[110px] m-auto overflow-hidden rounded-full object-cover hover:scale-105 ease-in-out duration-300 `}
          />
          <p
            className={`text-sm text-slate-800 m-[2px] text-center font-medium`}
          >
            {value.name}
          </p>
        </div>
      </Link>
    ));
  };

  return (
    <div className="w-full relative">
      <div className={` bg-blue-200  h-[113px] absolute w-full`}></div>
      <div
        className={`relative w-full md:w-[90%] max-w-[1500px] m-auto mt-3 z-10 `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          className={`ml-2 text-center w-full md:ml-0 mb-2 font-medium text-slate-900 
          text-lg capitalize inline-block`}
        >
          prime shop
        </a>
        <div className="flex flex-wrap justify-evenly items-center ">
          {renderItems()}
        </div>
        <button className="prev" onClick={handlePrevSlideClick}>
          &#10094;
        </button>
        <button className="next" onClick={handleNextSlideClick}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default ShopSlide;
