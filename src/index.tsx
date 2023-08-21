import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  
    <BrowserRouter>
    <QueryClientProvider client={client}>
      <App />
      </QueryClientProvider>
    </BrowserRouter>
  
);
