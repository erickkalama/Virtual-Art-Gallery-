import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/HomePage";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/gallery",
      element: <Gallery/>
    },
    {
      path: "/artist",
      element: <Artist />
    }
  ]);
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (<RouterProvider router={router} />);