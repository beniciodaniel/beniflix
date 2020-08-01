import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home";
import CadastroVideo from "./pages/cadastro/CadastroVideo";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroCategoria from "./pages/cadastro/CadastroCategoria";

const Pagina404 = () => {
  return <div>404</div>;
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
