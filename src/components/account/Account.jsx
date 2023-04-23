import React, { useState } from "react";
import Aside from "./Aside";
import ProductPanel from "./ProductPanel";
import AddProduct from "./AddProduct";
import OrderPanel from "./OrderPanel";
import SettingAccount from "./SettingAccount";
function SellerAccount() {
  const [panel, setPanel] = useState(<ProductPanel />);
  const WichPanel = (e) => {
    switch (e) {
      case "products":
        setPanel(<ProductPanel />);
        break;
      case "addProduct":
        setPanel(<AddProduct />);
        break;
      case "orders":
        setPanel(<OrderPanel />);
        break;
      case "setting":
        setPanel(<SettingAccount />);
        break;
      default:
        setPanel(<ProductPanel />);
        break;
    }
  };
  return (
    <section className={`flex justify-start items-start w-full`}>
      <Aside selectedPanel={WichPanel} />
      {panel}
    </section>
  );
}

export default SellerAccount;
