import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import people from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const showPrev = () => {
    setIndex((prevState) => {
      return checkNumber(prevState - 1);
    });
  };
  const showNext = () => {
    setIndex((prevState) => {
      return checkNumber(prevState + 1);
    });
  };

  const showRandom = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  };

  return (
    <article key={id} className="review">
      <img src={image} alt={name} className="review__author-img" />
      <div className="review__author-info">
        <h4 className="review__author-name">{name}</h4>
        <h6 className="review__author-job">{job}</h6>
      </div>
      <p className="review__text">{text}</p>
      <div className="btn-container">
        <FaChevronLeft className="prev-btn" onClick={showPrev} />
        <FaChevronRight className="next-btn" onClick={showNext} />
      </div>
      <button className="random-btn" onClick={showRandom}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
