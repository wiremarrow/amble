import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from './App';
import './index.css';

import Page1 from "/Users/hansonx/Desktop/react-amble-website/src/App.js";
import Page2 from "./Page2";

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );