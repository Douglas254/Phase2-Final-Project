import axios from "axios";
import React, { useState } from "react";

// components
import GenerateMealButton from "../components/GenerateMealButton";
import DisplayMeals from "../components/DisplayMeals";
import RecipeVideo from "../components/RecipeVideo";
import LikeButton from "../components/LikeButton";
import Comments from "../components/Comments";

// our API
const api = "https://www.themealdb.com/api/json/v1/1/random.php";

const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    const response = await axios.get(api);
    setData(response.data.meals[0]);
    setCount(0);
    // console.log(response.data);
  };

  // function to handle the like click
  function handleLikeClick() {
    setCount(count + 1);
  }

  return (
    <>
      <GenerateMealButton onGenerateButtonClick={handleClick} />
      <DisplayMeals data={data} />
      <RecipeVideo data={data} />
      <LikeButton data={data} count={count} onLikeClick={handleLikeClick} />
      <Comments data={data} />
    </>
  );
};

export default Home;
