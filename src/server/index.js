import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import React from "react";
import Routes from "../Routes";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
const app = express();
app.use(express.static("public"));
app.get("*", function (req, res) {
  const reducer = (state = { name: "dell" }, action) => {
    return state;
  };
  const store = createStore(reducer, applyMiddleware(thunk));
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  );
  res.send(
    `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>  
        <script src="/index.js"></script>
      </body>
    </html>
    `
  );
});
app.listen(3000);
