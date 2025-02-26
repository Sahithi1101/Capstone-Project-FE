import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import ViewbooksPage from "./pages/ViewbooksPage.jsx";
import AddbooksPage from "./pages/addbooksPage.jsx"
import LoginPage from "./pages/loginPage.jsx";
import Header from "./components/Header.jsx"
import Editbook from "./components/Editbook.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";


export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/view' element={<ViewbooksPage />} />
        <Route path='/add' element={<AddbooksPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/edit/:id" element={<Editbook />} exact />
      </Routes>
      <Footer/>
    </div>
    );
  }

