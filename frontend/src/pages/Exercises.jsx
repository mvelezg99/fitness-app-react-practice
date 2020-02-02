import React, { Fragment } from "react";

import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'

const Exercises = ({data}) => (
  <Fragment>
    <Welcome username="Miguel" />
    <ExerciseList exercises={data} />
    <AddButton />
  </Fragment>
);

export default Exercises;
