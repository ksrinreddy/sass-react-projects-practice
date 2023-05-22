import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="tours">
      <div className="tours__title grid">
        <h2 className="tours__title-text">
          our tours
          <div className="tours__title-underline"></div>
        </h2>
      </div>
      <div className="tours__list grid">
        {tours.map((tour) => {
          return <Tour tour={tour} key={tour.id} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
