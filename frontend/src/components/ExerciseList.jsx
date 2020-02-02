import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Card from "./Card";

const ExerciseList = ({ exercises }) => (
  <Fragment>
    {exercises.map(exercise => {
      return (
        <Card
          key={exercise.id}
          {...exercise}
          // title={exercise.title}
          // description={exercise.description}
          // img={exercise.img}
          // leftColor={exercise.leftColor}
          // rightColor={exercise.rightColor}
        />
      );
    })}
  </Fragment>
);

export default ExerciseList;
