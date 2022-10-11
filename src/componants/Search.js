import React from "react";
import { useState } from "react";
import Actor from "./Actor";
import Shows from "./Shows";
import "./styles.css";

const Search = () => {
  const [isActor, setIsActor] = useState(false);
  const [isShows, setIsShows] = useState(false);

  function getActor(e) {
    setIsActor(true);
    setIsShows(false);
  }
  function getShows(e) {
    setIsActor(false);
    setIsShows(true);
  }

  return (
    <div className="body">
      <h2 className="title">Welcome to TV-Maze Search App</h2>
      <div className="searchtype">
        <div className="actor">
          <label for="searchType">Actor</label>
          <input
            onChange={getActor}
            type={"radio"}
            name="searchType"
            value={"actor"}
          />
        </div>
        <div className="shows">
          <label for="searchType">Shows</label>
          <input
            onChange={getShows}
            type={"radio"}
            name="searchType"
            value={"shows"}
          />
        </div>
      </div>

      {isActor && <Actor />}
      {isShows && <Shows />}
    </div>
  );
};

export default Search;
