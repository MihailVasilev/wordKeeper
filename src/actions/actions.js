import { fetchDataActionTypes, wordActionTypes } from "./types";
import { alphabetSortedArrayByField, mappingDictionary } from "../utils";

export const wordsActions = {
  getWords: (searchValue) => {
    return (dispatch) => {
      dispatch({
        type: fetchDataActionTypes.FETCH_LOADING,
      });

      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then((json) => {
          const response = alphabetSortedArrayByField(
            mappingDictionary(json),
            "word"
          );
          const payload = response.slice(0, 10);

          dispatch({
            type: fetchDataActionTypes.FETCH_SUCCESS,
            payload,
          });
        })
        .catch((error) => {
          dispatch({
            type: fetchDataActionTypes.FETCH_ERROR,
            payload: error.message,
          });
        });
    };
  },

  addWord: (id) => ({
    type: wordActionTypes.ADD_WORD,
    payload: id,
  }),

  deleteWord: (id) => ({
    type: wordActionTypes.DELETE_WORD,
    payload: id,
  }),

  showDetails: (id, forStarred = true) => ({
    type: wordActionTypes.SHOW_DETAILS,
    payload: { id, forStarred },
  }),

  reorderList: (position) => ({
    type: wordActionTypes.REORDER,
    payload: position,
  }),

  getFilter: (filterName) => ({
    type: wordActionTypes.FILTER_WORDS,
    payload: filterName,
  }),
};
