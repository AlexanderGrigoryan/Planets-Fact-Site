import React from "react";
import { useParams } from "react-router";
import data from "../data.json";

function Planet() {
  const params = useParams();

  const planet = data.find(
    (element) => element.name.toLowerCase() === params.name
  );

  console.log(params);

  return <div>{planet?.name}</div>;
}

export default Planet;
