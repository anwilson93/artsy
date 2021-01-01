import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import AddProduct from "./components/AddProduct";
import ViewProduct from "./components/ViewProduct";
import AddProductReviewForm from "./components/AddProductReviewForm";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/test'>
            <AddProduct />
          </Route>
          <Route path='/products/:id'>
            <ViewProduct />
          </Route>
          <Route path='/reviews/:id'>
            <AddProductReviewForm />
          </Route>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
