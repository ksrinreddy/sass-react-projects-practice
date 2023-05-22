import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

const CocktailsList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <section className="no-match-section">
        <h3 className="desc">No cocktails matched your search</h3>
      </section>
    );
  }
  return (
    <section className="section-cocktails">
      <h2 className="title">cocktails</h2>
      <div className="list-cocktails">
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />;
        })}
      </div>
    </section>
  );
};

export default CocktailsList;
