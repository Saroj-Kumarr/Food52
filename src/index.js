import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./Components/CartPage";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
   path:"/",
   element:<SignUp/>,
  },{
    path:"/login",
    element:<SignIn/>
  },
  {
    path: "/app", // show path for routing
    element: <App />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
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
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter

reportWebVitals();
