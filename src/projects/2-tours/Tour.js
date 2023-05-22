import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const { id, name, image, info, price } = tour;

  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour grid">
      <img src={image} alt={name} className="tour__img" />
      <footer className="tour__footer flex">
        <h5 className="tour__title">{name}</h5>
        <h5 className="tour__price">${price}</h5>
      </footer>
      <p className="tour__info">
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button
          className="tour__info-btn"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "show less" : "read more"}
        </button>
      </p>
      <button className="tour__delete-btn" onClick={() => removeTour(id)}>
        not interested
      </button>
    </div>
  );
};

export default Tour;
