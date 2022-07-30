import "./App.css";
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import NavBar from "./components/NavBar";

// pages
import Home from "./pages/Home";
import MealCategories from "./pages/MealCategories";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/categories" element={<MealCategories />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
