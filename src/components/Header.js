import React from "react";
import logo from "../assets/logo.png";

const Header = ({ search, setSearch }) => {
  return (
    <div className="header">
      <img src={logo} alt={logo} id="logo" width="200px" />
      <div>
        <h1 style={{ color: "orange" }}>Football Legends</h1>
        <input
          type="search"
          className="search"
          name="search"
          value={search}
          placeholder="Search Player..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
