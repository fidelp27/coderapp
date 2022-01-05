import React from "react";
import ItemListContainer from "../components/Items/ItemListContainer";
import "./landing.css"

const Landing = () => {
  return (
    <>
    <div className="landing-container">
      <img src="https://i.imgur.com/EqEwhp7.png" alt="logo" />
    </div>
    <div>
      <ItemListContainer/>
    </div>
    </>
  );
};
export default Landing;
