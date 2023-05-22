import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const ColorGeneratorApp = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorsList, setColorsList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setColorsList(colors);
      // console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="section-form">
        <h3 className="form__title">color generator</h3>
        <form className="form form__color" onSubmit={handleSubmit}>
          <input
            type="text"
            className={`colorInput ${error ? "error" : null}`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
          />
          <button type="submit" className="btn-submit">
            submit
          </button>
        </form>
      </section>
      <section className="list-colors">
        {colorsList.map((colorItem, index) => {
          // console.log(index);
          return (
            <SingleColor key={index} colorItem={colorItem} index={index} />
          );
        })}
      </section>
    </>
  );
};

export default ColorGeneratorApp;
