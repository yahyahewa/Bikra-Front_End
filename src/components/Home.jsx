import React from "react";

import MainNavbar from "./MainNavbar";
import ShopSlide from "./ShopSlide";
import CategorySlide from "./CategorySlide";
import ItemsPanel from "./ItemsPanel";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Account from "./account/Account";
function Home() {
  const isDark = useSelector((state) => state.theme.value);
  return (
    <div
      className={`h-screen ${
        isDark ? `bg-gray-800` : ``
      }  ease-in-out duration-150`}
    >
      <MainNavbar />
      <ShopSlide />
      {/* <Account /> */}
      <ItemsPanel
        text={`Items`}
        class={`absolute left-1 text-lg font-semibold border-b text-azure-radiance-800 border-azure-radiance-800`}
      />
      <CategorySlide />
      <Footer />
    </div>
  );
}

export default Home;
