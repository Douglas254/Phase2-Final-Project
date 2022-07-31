import React from "react";

const DisplayCategory = ({ image, title, description }) => {
  return (
    <div className="mt-5">
      <div>
        <div className="card mx-3" style={{ width: "18rem" }}>
          <img
            src={image}
            className="card-img-top imgCard"
            alt={title}
            title={title}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text descriptionBg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCategory;
