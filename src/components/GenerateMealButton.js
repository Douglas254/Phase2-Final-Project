import React from "react";

const GenerateMealButton = () => {
  return (
    <div className="mealBtn">
      <div className="row">
        <h1 className="text-center pt-5 pb-3">
          Get a
          <span className="badge rounded-pill bg-warning text-dark mealSpan">
            Meal
          </span>
          for your Day?
        </h1>
      </div>
      <div className="row">
        <div className="text-center pb-3">
          <button className="btn btn-success" id="generateMealBtn">
            Generate Meal!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateMealButton;
