import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const ToursApp = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      //   console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <>
        <main className="main">
          <Loading />
        </main>
      </>
    );
  }
  if (tours.length === 0) {
    return (
      <>
        <main className="no-tours">
          <h2 className="no-tours__text">no tours left</h2>
          <button className="no-tours__refresh-btn" onClick={getTours}>
            refresh
          </button>
        </main>
      </>
    );
  }
  return (
    <>
      <main className="main">
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
};

export default ToursApp;
