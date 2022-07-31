import React, { useState } from "react";

const Comments = ({ data }) => {
  const [comments, setComments] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  // function to handle Submit
  function handleSubmit(e) {
    e.preventDefault();
    const formData = { comment: comments };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setComments("");
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return <div key={index}>{data.comment}</div>;
  });

  function handleCommentChange(e) {
    setComments(e.target.value);
  }

  return (
    <>
      {data.strYoutube ? (
        <div className="row pt-5">
          <h3>
            <span>📋</span> Comments:
          </h3>
          <div className="col-12">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                id="input"
                name="comment"
                value={comments}
                placeholder="Write your comment here"
                autoComplete="off"
                onChange={handleCommentChange}
              />
              <br />
              <input type="submit" id="submit" value="COMMENT" />
            </form>
          </div>

          <div className="comments pt-5">
            <div>
              <b>
                <u>Recent comments</u>
              </b>
              {listOfSubmissions}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Comments;
