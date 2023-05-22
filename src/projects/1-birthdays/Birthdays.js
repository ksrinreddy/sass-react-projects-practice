import React, { useState } from "react";
import data from "./data";

const Birthdays = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <article className="birthdays">
        <div className="birthdays__container">
          <h3 className="birthdays__title">{people.length} birthdays today</h3>
          {people.map((person) => {
            const { id, name, age, image } = person;
            return (
              <>
                <article className="birthdays__card" key={id}>
                  <img
                    src={image}
                    alt={name}
                    className="birthdays__person-img"
                  />
                  <div className="birthdays__person-info">
                    <h4 className="birthdays__person-name">{name}</h4>
                    <p className="birthdays__person-age">{age} years</p>
                  </div>
                </article>
              </>
            );
          })}
          <button
            className="birthdays__clear-btn"
            onClick={() => setPeople([])}
          >
            clear all
          </button>
        </div>
      </article>
    </>
  );
};

export default Birthdays;
