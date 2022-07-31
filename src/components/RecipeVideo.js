import React from "react";

const RecipeVideo = ({ data }) => {
  const { strYoutube, strMeal } = data;

  return (
    <>
      <div className="row">
        <div className="col-12 videoRecipe text-center py-3">
          <h1>Recipe Video</h1>
          <span className="underline"></span>
        </div>
        <div className="row text-center" id="iframe">
          <div className="col-12" id="iframe">
            {strYoutube ? (
              <iframe
                width="80%"
                height="400"
                src={strYoutube.replace("watch?v=", "embed/")}
                title={`Watch how to prepare ${strMeal}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                id="recipeVideo"
              ></iframe>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeVideo;
