import React from "react";

const LikeButton = ({ data, count, onLikeClick }) => {
  // callback function (child to parent)
  function handleLikeClick() {
    onLikeClick();
  }

  return (
    <>
      {data.strYoutube ? (
        <div className="like">
          <span onClick={handleLikeClick}>👍 </span>
          <span
            id="count"
            className="countLike badge rounded-pill bg-dark text-light"
            title={`${count} Likes`}
          >
            {count}
          </span>
        </div>
      ) : null}
    </>
  );
};

export default LikeButton;
