/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const FruitList = ({ fruits }) => {
  return (
    <div>
      <p>Fruit List</p>
      <ul>
        {fruits?.map((fruit, i) => (
          <li key={i}> {fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
