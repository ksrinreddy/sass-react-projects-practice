import React from "react";
import SearchForm from "../components/SearchForm";
import CocktailsList from "../components/CocktailsList";

const Home = () => {
  return (
    <main className="section-home">
      <SearchForm />
      <CocktailsList />
    </main>
  );
};

export default Home;
