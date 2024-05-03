import "./App.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import CustomNavBar from "./components/CustomNavBar";
import "./style/custom.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 return (
  <BrowserRouter>
   <CustomNavBar />
   <Routes>
    <Route path="/" element={<HomePage />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
