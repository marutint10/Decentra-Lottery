import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";
const Intro = () => {
  return (
    <>
      <ul className="list-group" id="list">
        <div className="center">
          <li className="list-group-item" aria-disabled="true">
            <h3>Start the lottery by entring as a player</h3>
          </li>

          <Link to="/players" className="text-decoration-none text">
            <button className="button1 player">Player</button>
          </Link>
        </div>
      </ul>
    </>
  );
};

export default Intro;
