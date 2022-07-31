import "./App.css";
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import NavBar from "./components/NavBar";

// pages
import Home from "./pages/Home";
import MealCategories from "./pages/MealCategories";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CategoriesFreedom from "./components/AddCategories";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/category" element={<MealCategories />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route
            exact
            path="/addCategories"
            element={<CategoriesFreedom />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
