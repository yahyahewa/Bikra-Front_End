// import css file
import "./App.css";
import MainNavbar from "./components/MainNavbar";
//--//-----------//--//
// import components
import MainNavbar from "./components/MainNavbar";
//--//-----------//--//
// import packeg
import { Route, Routes } from "react-router-dom";
//--//-----------//--//
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<MainNavbar />} />
      </Routes>
    </div>
  );
}

export default App;
