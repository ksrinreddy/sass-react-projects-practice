import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Cocktail = ({ id, name, image, glass, info }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="info-container">
        <h3 className="name">{name}</h3>
        <h6 className="glass">{glass}</h6>
        <p className="info">{info}</p>
        <Link to={`/cocktail/${id}`} className="details-btn">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
