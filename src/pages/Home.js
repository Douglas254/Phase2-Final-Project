import axios from "axios";
import React, { useState } from "react";

// components
import GenerateMealButton from "../components/GenerateMealButton";
import DisplayMeals from "../components/DisplayMeals";
import RecipeVideo from "../components/RecipeVideo";

const api = "https://www.themealdb.com/api/json/v1/1/random.php";

const Home = () => {
  const [data, setData] = useState([]);

  const handleClick = async () => {
    const response = await axios.get(api);
    setData(response.data.meals[0]);
    // console.log(response.data);
  };
  // console.log(data);
  return (
    <>
      <GenerateMealButton onGenerateButtonClick={handleClick} />
      <DisplayMeals data={data} />
      <RecipeVideo data={data} />
    </>
  );
};

export default Home;
