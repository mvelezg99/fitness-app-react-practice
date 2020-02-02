import React from "react";
import { Link } from "react-router-dom";

import "./styles/AddButton.css";
import buttonImg from "../images/add.png";

const AddButton = () => (
  <Link to="/exercise/new">
    <img src={buttonImg} alt="New exercise" className="Fitness-Add" />
  </Link>
);

export default AddButton;
