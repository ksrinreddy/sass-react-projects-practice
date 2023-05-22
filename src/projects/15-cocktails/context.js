import React, { useState, useEffect, useContext } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      // console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
            info: strAlcoholic,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm,
        setCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
