import React from "react";

const DisplayMeals = ({ data }) => {
  let {
    strMeal,
    strMealThumb,
    strInstructions,
    strArea,
    strCategory,
    strTags,
  } = data;

  const ingredients = [];

  Object.keys(data).forEach((item, index) => {
    if (data[`strIngredient${index}`]) {
      ingredients.push({
        ingredient: data[`strIngredient${index}`],
        measure: data[`strMeasure${index}`],
      });
    }
  });

  const renderList = (item, index) => (
    <div key={index} className="d-flex">
      <li className="listItem">{item.ingredient} -</li>
      <span className="ms-2 fst-italic">{item.measure}</span>
    </div>
  );

  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={strMealThumb}
              className="img-fluid img-thumbnail card-img-top"
              alt="Meal pic"
              title={strMeal}
            />
            <div className="card-body">
              <h5 className="card-title">{strMeal}</h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3">
          <div className="row">
            <h3 id="ingredientsTitle">Ingredients</h3>
            {ingredients.map((item, index) => renderList(item, index))}
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <h3>Insructions On How to Cook</h3>
          <p id="instructions">{strInstructions}</p>
        </div>
      </div>
      <div className="row py-2 mt-5">
        <div className="col-4 col-lg-4">
          <h6>Category:</h6>
          <span className="badge rounded-pill bg-info text-dark">
            {strCategory}
          </span>
        </div>
        <div className="col-4 col-lg-4">
          <h6>Area:</h6>
          <span id="area" className="badge rounded-pill bg-info text-dark">
            {strArea}
          </span>
        </div>
        <div className="col-4 col-lg-4">
          <h6>Tags:</h6>
          <span id="tags" className="badge rounded-pill bg-info text-dark">
            {strTags?.split(",").join(", ")}
          </span>
        </div>
      </div>
    </>
  );
};

export default DisplayMeals;
