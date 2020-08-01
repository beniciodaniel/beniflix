import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/beniflix.png";
import Button from "../Button";

// import ButtonLink from "./components/ButtonLink";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
      <Button as={Link} to="/cadastro/categoria" className="ButtonLink">
        Nova Categoria
      </Button>
    </nav>
  );
}

export default Menu;
