import React, { useRef } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { loading, setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name" className="label">
            Search your favorite cocktail
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="search-input"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
