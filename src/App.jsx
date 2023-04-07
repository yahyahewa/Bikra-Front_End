// import packeg
import { Route, Routes } from "react-router-dom";
//--//-----------//--//
// import css file
import "./App.css";
// import components
import Home from "./components/Home.jsx";
import ItemPage from "./components/ItemPage";
import SingleItem from "./components/SingleItem";
//--//-----------//--//
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleitem/:id" element={<SingleItem />}></Route>
        <Route path="/item" element={<ItemPage />}></Route>
        <Route path="/item/:categorey" element={<ItemPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
