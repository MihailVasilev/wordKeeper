import React from "react";
import "./SearchInput.style.scss";
import SimpleLoader from "../SimpleLoader";
import { getStringToLowerCase } from "../../utils";

function SearchInput({
  value,
  onChange,
  placeholder,
  onClick,
  isLoading = false,
}) {
  const handleChange = (event) => {
    event.preventDefault();

    !!onChange &&
      onChange(
        getStringToLowerCase(event.target.value.replace(/[^A-Za-z]/gi, ""))
      );
  };

  const onKeyPressEnter = (event) => {
    event.charCode === 13 && !!onClick && onClick();
  };

  const onClickSearch = (event) => {
    event.preventDefault();

    !!onClick && onClick();
  };

  return (
    <div className="searchInput-container">
      <input
        type="text"
        id="search"
        name="search"
        value={value}
        onChange={handleChange}
        onKeyPress={onKeyPressEnter}
        placeholder={placeholder || "Search Words"}
      />
      {isLoading ? (
        <SimpleLoader />
      ) : (
        <i onClick={onClickSearch} className="fa fa-search" />
      )}
    </div>
  );
}

export default SearchInput;
