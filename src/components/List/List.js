import React from "react";

const List = ({ item }) => {
  return (
    <ul>
      <li>{item.task}</li>
    </ul>
  );
};

export default List;
