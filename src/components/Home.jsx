import React from "react";

import MainNavbar from "./MainNavbar";
import ShopSlide from "./ShopSlide";
import CategorySlide from "./CategorySlide";
import ItemsPanel from "./ItemsPanel";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <MainNavbar />
      <ShopSlide />
      <CategorySlide />
      <ItemsPanel
        text={`Items`}
        class={`absolute left-1 text-lg font-semibold border-b text-azure-radiance-800 border-azure-radiance-800`}
      />
      <Footer />
    </div>
  );
}

export default Home;
