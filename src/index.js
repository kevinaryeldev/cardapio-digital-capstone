import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider from "./providers";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import ColorSettings from "./styles/colorSettings";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Provider>
      <BrowserRouter>
        <React.StrictMode>
          <ColorSettings>
            <App />
          </ColorSettings>
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
    <GlobalStyle />
  </>
);
