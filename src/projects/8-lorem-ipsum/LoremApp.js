import React, { useState } from "react";
import data from "./data";

const LoremApp = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-lorem">
      <div className="section-center">
        <h2 className="lorem-title">tired of boring lorem ipsum?</h2>
        <form className="lorem-form">
          <label htmlFor="count" className="para-label">
            Pargraphs:
          </label>
          <input
            type="number"
            name="count"
            id="count"
            className="para-input"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return (
              <p className="lorem-para" key={index}>
                {item}
              </p>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default LoremApp;
