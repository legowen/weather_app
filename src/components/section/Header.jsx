import React from "react";
// Components
import Title from "./Header/Title";
import CurrentLocalWeather from "./Header/CurrentLocalWeather";

const Header = () => {
  return (
    <header className="header">
      <Title />
      <CurrentLocalWeather />
    </header>
  );
};

export default Header;