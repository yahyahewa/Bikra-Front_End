// import packeg
import { Route, Routes } from "react-router-dom";
//--//-----------//--//
// import css file
import "./App.css";
// import components
import Home from "./components/Home.jsx";
import ItemPage from "./components/ItemPage";
import SingleItem from "./components/SingleItem";
import AddtoCart from "./components/CartsPage";
import Login from "./components/Login";
import CreateWebsite from "./components/CreateWebsite";
import ItemEditor from "./components/account/ProductEditor";
import Account from "./components/account/Account";
//--//-----------//--//
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main#CreateWebs" element={<Home />} />
        <Route path="/singleitem/:id" element={<SingleItem />}></Route>
        <Route path="/itemeditor/:id" element={<ItemEditor />}></Route>
        <Route path="/item" element={<ItemPage />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/signup" element={<CreateWebsite />}></Route>
        <Route path="/item/:categorey" element={<ItemPage />}></Route>
        <Route path="/cart/" element={<AddtoCart />}></Route>
        <Route path="/item/:categorey" element={<ItemPage />}></Route>
        <Route path="/login/" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
