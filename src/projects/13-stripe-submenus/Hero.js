import React from "react";
import heroImg from "./images/hero.svg";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="section-hero" onMouseOver={closeSubmenu}>
      <div className="hero-background-overlay">
        <img src={heroImg} alt="hero" className="hero-img" />
      </div>
      <div className="hero-center">
        <article className="hero-info">
          <h1 className="hero-title">
            Payments infrastructure <br />
            for the internet
          </h1>
          <p className="hero-desc">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn-hero">start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
