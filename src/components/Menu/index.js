import React from "react";
import Logo from "../../assets/images/beniflix.png";
import Button from "../Button";

// import ButtonLink from "./components/ButtonLink";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>
      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
