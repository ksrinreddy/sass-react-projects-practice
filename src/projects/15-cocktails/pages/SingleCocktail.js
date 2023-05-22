import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchDrink = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      // console.log(data);
      if (data.drinks) {
        const drink = data.drinks[0];
        // console.log(drink);
        const {
          strDrink: name,
          strDrinkThumb: image,
          strGlass: glass,
          strAlcoholic: info,
          strCategory: category,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drink;

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];

        const newCocktail = {
          name,
          image,
          glass,
          info,
          category,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDrink();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return (
      <div className="no-match-section">
        <h2 className="desc">no cocktail to display</h2>
      </div>
    );
  }
  const { name, image, glass, info, category, instructions, ingredients } =
    cocktail;
  return (
    <article className="single-cocktail">
      <Link to="/" className="btn btn-home">
        back home
      </Link>
      <h1 className="name">{name}</h1>
      <div className="drink">
        <img src={image} alt={name} className="drink-img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}> {item} </span> : null;
            })}
          </p>
        </div>
      </div>
    </article>
  );
};

export default SingleCocktail;
