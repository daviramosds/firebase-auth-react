import React from "react";
import { Route, BrowserRouter, Router } from "react-router-dom";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route element={ <Login /> } path="/login" />
      <Route element={ <Register /> } path="/register" />
    </BrowserRouter>
  );
};

export default Routes;
