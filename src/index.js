import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./Components/CartPage";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import OrderPage from "./Components/OrderPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/app",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/app",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/app/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "orderpage",
        element: <OrderPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
