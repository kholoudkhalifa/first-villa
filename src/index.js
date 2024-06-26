import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import App from "./App";
import AllDetails from "./Details/AllDetails";
import AllContact from "./Contact/AllContact";
import AllProduct from "./Product/AllProduct";
import AllProperties from "./Properties/AllProperties";
import AllFeatures from "./Features/AllFeatures";
import AllCart from "./cart/AllCart";
import { CartProvider } from "react-use-cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
     
  },
  {
    path: "propert",
    element: <AllProperties/>,
  },
  {
    path: "details",
    element: <AllDetails/>,
  },
  {
    path: "contact",
    element: <AllContact/>,
  },
  {
    path: "features",
    element: <AllFeatures/>,
  },
  {
    path: "product",
    element: <AllProduct/>,
  },
  {
    path: "Cart",
    element: <AllCart/>,
  },


]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
  <RouterProvider router={router} />
  </CartProvider>
  
);


