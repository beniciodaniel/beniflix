import React from "react";
import Logo from "../../assets/images/beniflix.png";
import ButtonLink from "./components/ButtonLink";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>
      <ButtonLink href="/" className="ButtonLink">
        Novo vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;
