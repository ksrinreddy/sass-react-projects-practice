import React from "react";
// import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
// import { AppContext } from "./context";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <section className="section-home">
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn-modal" onClick={openModal}>
        modal
      </button>
    </section>
  );
};

export default Home;
