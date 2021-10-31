import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({getQuestions, questions, page}) {
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => getQuestions(data))

    return function cleanup(){
      console.log("done")
    }
  }, [page])

  const questionsDisplay = questions.map((question) => {
    return <QuestionItem key={question.id} question={question}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsDisplay}
      </ul>
    </section>
  );
}

export default QuestionList;
