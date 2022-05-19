import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./providers";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import ColorSettings from "./styles/colorSettings";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider>
      <BrowserRouter>
        <ColorSettings>
          <App />
        </ColorSettings>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
