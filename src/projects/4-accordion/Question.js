import React, { useState } from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

const Question = ({ question }) => {
  const { id, title, info } = question;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <article className="question" key={id}>
        <header className="question__header">
          <h4 className="question__title">{title}</h4>
          <button className="icon" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <BiMinusCircle /> : <BiPlusCircle />}
          </button>
        </header>
        {showInfo && <p className="info">{info}</p>}
      </article>
    </>
  );
};

export default Question;
