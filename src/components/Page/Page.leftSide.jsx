import React from "react";
import SearchInput from "../../components/SearchInput";
import FilterList from "../FilterList";

function PageLeftSide(props) {
  const {
    searchValue,
    setSearchValue,
    fetchWord,
    filters,
    getFilter,
    currentFilter,
    isLoading,
  } = props;

  const filterListProps = { filters, getFilter, currentFilter };

  return (
    <div className="page-leftSide">
      <SearchInput
        value={searchValue}
        onChange={setSearchValue}
        onClick={fetchWord}
        isLoading={isLoading}
      />
      {!!filters && !!filters.length && <FilterList {...filterListProps} />}
    </div>
  );
}

export default PageLeftSide;
