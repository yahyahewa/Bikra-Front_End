import React from "react";

import MainNavbar from "./MainNavbar";
import ShopSlide from "./ShopSlide";
import CategorySlide from "./CategorySlide";
import ItemsPanel from "./ItemsPanel";
import Filter from "./Filter";
function Home() {
  return (
    <div>
      <MainNavbar />
      <ShopSlide />
      <CategorySlide />
      <ItemsPanel />
      <Filter />
    </div>
  );
}

export default Home;
