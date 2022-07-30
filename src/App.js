import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MealCategories from "./components/MealCategories";
import Contact from "./components/Contact";
import Home from "./components/Home";

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
