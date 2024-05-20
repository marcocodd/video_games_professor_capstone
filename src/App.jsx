import "./App.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./style/custom.css";
import CustomNavBar from "./components/CustomNavBar";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import GameDetail from "./components/DetailsPageGame";
import GamesPage from "./components/GamesPage";

function App() {
 return (
  <BrowserRouter>
   <header className="sticky-top">
    <CustomNavBar />
   </header>
   <main>
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/profile" element={<ProfilePage />} />
     <Route path="/game/:id" element={<GameDetail />} />
     <Route path="/games" element={<GamesPage />} />
    </Routes>
   </main>
   <footer>
    <Footer />
   </footer>
  </BrowserRouter>
 );
}

export default App;
