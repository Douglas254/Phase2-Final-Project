import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayCategory from "./DisplayCategory";

const api = "https://www.themealdb.com/api/json/v1/1/categories.php";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    ourCategories();
  }, []);

  const ourCategories = async () => {
    const response = await axios.get(api);
    setCategories(response.data.categories);
  };

  const categoriesList = categories.map((category) => (
    <DisplayCategory
      key={category.idCategory}
      image={category.strCategoryThumb}
      title={category.strCategory}
      description={category.strCategoryDescription}
    />
  ));

  return (
    <div>
      {categories[0] ? (
        <div className="categoryList">{categoriesList}</div>
      ) : (
        <span className="loading">Loading...☸️</span>
      )}
    </div>
  );
};

export default Categories;
