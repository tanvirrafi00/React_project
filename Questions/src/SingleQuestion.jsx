import { useState } from "react";

/* eslint-disable react/prop-types */
const SingleQuestion = ({ title, info }) => {
  const [full, setFull] = useState(false);

  return (
    <>
      <div className="question">
        <div className="question_heading">
          <h1 className="title">{title}</h1>

          <div>
            <button onClick={() => setFull(!full)} className="btn">
              {full ? (
                <img src="./image/minimize.svg" alt="" />
              ) : (
                <img src="./image/readmore.svg" alt="" />
              )}
            </button>
          </div>
        </div>

        {full && <p className="info">{info}</p>}
      </div>
    </>
  );
};

export default SingleQuestion;
