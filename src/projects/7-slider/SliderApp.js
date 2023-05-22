import React, { useEffect, useState } from "react";
import data from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const SliderApp = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // auto slide
  useEffect(() => {
    const autoSlider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(autoSlider);
  }, [index]);

  return (
    <>
      <main className="main-slider">
        <header className="title">
          <h1 className="title__text">
            <span className="slash">/</span> Reviews
          </h1>
        </header>
        <section className="slider-section section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, quote, title } = person;
            // console.log(person);
            // more stuff on adding classnames dynamically
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "prevSlide";
            }

            return (
              <article className={`slider-card ${position}`} key={id}>
                <img src={image} alt={name} className="photo" />
                <div className="info">
                  <h4 className="name">{name}</h4>
                  <h5 className="role">{title}</h5>
                </div>
                <p className="quote">{quote}</p>
                <FaQuoteRight className="quote-icon" />
              </article>
            );
          })}
          <div className="prev-btn btn" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </div>
          <div className="next-btn btn" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </div>
        </section>
      </main>
    </>
  );
};

export default SliderApp;
