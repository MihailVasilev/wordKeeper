import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wordsActions } from "../../actions";
import View from "./Main.view";

export default function Main() {
  const [searchValue, setSearchValue] = useState("");

  // selectors
  const { data, loading } = useSelector(
    (store) => store.wordsKeeperReducer.wordsState
  );

  // dispatches
  const dispatch = useDispatch();
  const fetchWord = () => dispatch(wordsActions.getWords(searchValue));
  const addWord = (id) => dispatch(wordsActions.addWord(id));
  const showDetails = (id) => dispatch(wordsActions.showDetails(id, false));

  useEffect(() => {
    !!searchValue && dispatch(wordsActions.getWords(searchValue));
  }, [dispatch, searchValue]);

  // View
  const viewProps = {
    leftSideProps: {
      searchValue,
      isLoading: loading,

      // actions
      fetchWord,
      setSearchValue,
    },
    rightSideProps: {
      data,
      isLoading: loading,

      // actions
      addWord,
      showDetails,
    },
  };
  return <View {...viewProps} />;
}
