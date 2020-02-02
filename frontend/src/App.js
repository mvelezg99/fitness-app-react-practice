import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ExercisesContainer from "./pages/ExercisesContainer";
import ExerciseNewContainer from "./pages/ExerciseNewContainer";
import NotFound from "./pages/404";

import Example from "./pages/Example";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Example} />
      <Route exact path="/exercise" component={ExercisesContainer} />
      <Route exact path="/exercise/new" component={ExerciseNewContainer} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
