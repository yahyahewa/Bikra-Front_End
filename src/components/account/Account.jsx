import React, { useState } from "react";
import Aside from "./Aside";
import ProductPanel from "./ProductPanel";
import AddProduct from "./AddProduct";
import OrderPanel from "./OrderPanel";
import SettingAccount from "./SettingAccount";
import MainNavbar from "../MainNavbar";
import { useGetUserInformationQuery } from "../../app/api/LoginAndSignUpEndPopiant";
import { Navigate } from "react-router-dom";
import AdminPanel from "./AccSetting/AdminPanel";
import Categorey from "./AccSetting/Categorey";
import Loading from "../Loading";
import { useEffect } from "react";
function SellerAccount() {
  const { data, isError, isLoading } = useGetUserInformationQuery();
  // useEffect(() => {

  // }, [data]);
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
      case "shopsInformation":
        setPanel(<AdminPanel />);
        break;
      case "categorey":
        setPanel(<Categorey />);
        break;
      default:
        setPanel(<ProductPanel />);
        break;
    }
  };
  if (!isLoading) {
    if (data?.data.email) {
      return (
        <main>
          <MainNavbar />
          <section className={`flex justify-start items-start w-full`}>
            <Aside selectedPanel={WichPanel} />
            {panel}
          </section>
        </main>
      );
    } else {
      return <Navigate to="/login" />;
    }
  }
}

export default SellerAccount;
