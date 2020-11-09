import React from "react";
import ItemFilter from "./ItemFilter";
import "./FilterList.style.scss";

function FilterList({ filters, getFilter, currentFilter }) {
  const additionProps = { getFilter, currentFilter };

  return (
    <div className="filterList-container">
      {filters.map((item) => {
        return <ItemFilter key={item.id} {...item} {...additionProps} />;
      })}
    </div>
  );
}

export default FilterList;
