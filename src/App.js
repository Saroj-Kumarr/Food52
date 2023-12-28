
import React from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Components/store';

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </React.Fragment>
  );
};

export default App;
