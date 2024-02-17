import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ClientContext, GraphQLClient } from "graphql-hooks";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_DATO_READ_ONLY_TOKEN}`,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </ClientContext.Provider>
  </React.StrictMode>
);
