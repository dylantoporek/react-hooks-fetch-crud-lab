import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function handleQuestions(question){
    setQuestions(question)
  }

  function addNewQuestion(question){
    setQuestions(...questions, question)
  }

  console.log(questions)

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addNewQuestion} setPage={setPage}/> : <QuestionList questions={questions} getQuestions={handleQuestions} page={page}/>}
    </main>
  );
}

export default App;
