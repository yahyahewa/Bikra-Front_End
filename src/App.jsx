// import packeg
import { Route, Routes } from "react-router-dom";
//--//-----------//--//
// import css file
import "./App.css";
// import components
import MainNavbar from "./components/MainNavbar";
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
