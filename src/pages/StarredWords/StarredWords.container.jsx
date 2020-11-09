import React, { useEffect, useState } from "react";
import View from "./StarredWords.view";
import { useDispatch, useSelector } from "react-redux";
import { wordsActions } from "../../actions";
import {
  getVisibleStarredByFilter,
  getVisibleStarredBySearch,
} from "../../utils";

export default function StarredWords() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const isViewDraggableList = true;

  useEffect(() => {
    !!searchValue.length && setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  // selectors
  const { data, filters, currentFilter } = useSelector(
    (store) => store.wordsKeeperReducer.starredWordsState
  );

  // dispatches
  const dispatch = useDispatch();
  const deleteWord = (id) => dispatch(wordsActions.deleteWord(id));
  const showDetails = (id) => dispatch(wordsActions.showDetails(id));
  const reorderList = (position) =>
    dispatch(wordsActions.reorderList(position));
  const getFilter = (filterName) =>
    dispatch(wordsActions.getFilter(filterName));

  // View
  const viewProps = {
    leftSideProps: {
      searchValue,
      filters,
      isLoading,

      // actions
      setSearchValue,
      getFilter,
    },
    rightSideProps: {
      data: getVisibleStarredBySearch(
        getVisibleStarredByFilter(data, filters, currentFilter),
        searchValue
      ),
      isViewDraggableList,
      isLoading,

      // actions
      deleteWord,
      showDetails,
      reorderList,
    },
  };
  return <View {...viewProps} />;
}
