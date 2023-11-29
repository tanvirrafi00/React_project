import { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const RenderQuestion = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <>
      {questions.map((question) => {
        return( <SingleQuestion key={question.id} {...question} />);
      })}
    </>
  );
};

export default RenderQuestion;
