import React, { useState } from "react";
import Review from "./Review";

const Reviews = () => {
  return (
    <>
      <section className="reviews-section">
        <header className="title">
          <h1 className="title__text">
            Our Reviews
            <div className="title__underline"></div>
          </h1>
        </header>
        <Review />
      </section>
    </>
  );
};

export default Reviews;
