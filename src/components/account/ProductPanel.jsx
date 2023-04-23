import React from "react";
import { useGetItemsQuery } from "../../app/api/productEndPoint";
import Card from "./Card";
function ProductPanel() {
  // const { data, error, isLoading } = useGetItemsQuery();

  const data = [
    {
      id: 1,
      name: "product1",
      price: 100,
      discount: 50,
      image: "https://picsum.photos/200/300",
      rating: [0, 0, 0, 1, 5],
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
      id: 2,
      name: "product1",
      price: 100,
      discount: 0,
      image: "https://picsum.photos/200/300",
      rating: [1, 2, 3, 4, 5],
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
      id: 3,
      name: "product1",
      price: 100,
      discount: 50,
      image: "https://picsum.photos/200/300",
      rating: [1, 2, 3, 4, 5],
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
      id: 4,
      name: "product1",
      price: 100,
      discount: 50,
      image: "https://picsum.photos/200/300",
      rating: [1, 2, 3, 4, 5],
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
  ];
  return (
    <div className="w-full">
      <div className={`w-full`}></div>
      <Card data={data} />
    </div>
  );
}

export default ProductPanel;
