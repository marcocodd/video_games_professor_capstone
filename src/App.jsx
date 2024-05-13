import "./App.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./style/custom.css";
import CustomNavBar from "./components/CustomNavBar";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
 return (
  <BrowserRouter>
   <CustomNavBar />

   <Routes>
    <Route path="/" element={<HomePage />} />
   </Routes>
   <Footer />
  </BrowserRouter>
 );
}

export default App;
