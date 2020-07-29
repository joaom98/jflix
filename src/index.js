import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro'
import CadastroCategoria from './pages/cadastro/Categoria';

import { BrowserRouter, Switch, Route } from 'react-router-dom'




ReactDOM.render(


  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video" exact component={CadastroVideo} />
      <Route path="/cadastro/categoria" exact component={CadastroCategoria} />

      <Route path="/" component={() => (<div>404</div>)} />
    </Switch>

  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
