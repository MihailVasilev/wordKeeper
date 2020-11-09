import React from "react";

function ItemFilter({ id, label, isChecked, getFilter }) {
  const onClickCheckBox = () => {
    const filterName = isChecked ? "" : label;
    getFilter(filterName);
  };

  return (
    <label key={id} className="filterItem">
      {label}
      <input type="checkbox" onClick={onClickCheckBox} />
      <span className={`checkbox ${isChecked ? "checked" : "not-checked"}`} />
    </label>
  );
}

export default ItemFilter;
