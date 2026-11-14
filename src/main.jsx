import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./tasks/8-redux-toolkit/store";
import ReduxApp from "./tasks/8-redux-toolkit/ReduxApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxApp />

    </Provider>

  </React.StrictMode>
);
