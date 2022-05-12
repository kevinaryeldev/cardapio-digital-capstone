import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./providers";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
