import React from "react";
import ItemList from "./ItemList";

function PageList(props) {
  const { data, deleteWord, addWord, showDetails } = props;
  const actions = { deleteWord, addWord, showDetails };

  return (
    <ul>
      {data.map((item) => (
        <ItemList key={item.id} {...item} {...actions} />
      ))}
    </ul>
  );
}

export default PageList;
