import React from "react";
import questions from "./data";
import Question from "./Question";

const QuestionsApp = () => {
  return (
    <>
      <section className="qa-section">
        <header className="title">
          <h2 className="title__text">Questions and answers about login</h2>
        </header>
        <div className="qa-container">
          {questions.map((question) => {
            return <Question question={question} key={question.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default QuestionsApp;
