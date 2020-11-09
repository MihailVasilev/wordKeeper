import { fetchDataActionTypes, wordActionTypes } from "../actions";
import { commonHelpers, starredHelpers } from "./helpers";

const wordsState = {
  loading: false,
  error: "",
  data: [],
};

const starredWordsState = {
  data: [],
  filters: [],
  currentFilter: "",
};

const inititalState = {
  wordsState,
  starredWordsState,
};

function wordsReducers(state, { type, payload }) {
  switch (type) {
    case fetchDataActionTypes.FETCH_LOADING:
      return { ...state, loading: true };
    case fetchDataActionTypes.FETCH_SUCCESS:
      return { ...state, loading: false, data: payload };
    case fetchDataActionTypes.FETCH_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
}

function starredWordsReducer(state, { type, payload }) {
  const {
    getNewStarredStateAfterReorder,
    getNewStarredStateAfterFilter,
  } = starredHelpers;

  switch (type) {
    case wordActionTypes.REORDER:
      return getNewStarredStateAfterReorder(state, payload);

    case wordActionTypes.FILTER_WORDS:
      return getNewStarredStateAfterFilter(state, payload);

    default:
      return state;
  }
}

function wordsKeeperReducer(state = inititalState, action) {
  const { wordsState, starredWordsState } = state;
  const {
    getNewStateAfterAddAction,
    getNewStateAfterDeleteAction,
    getNewStateAfterShowAction,
  } = commonHelpers;

  switch (action.type) {
    case wordActionTypes.ADD_WORD:
      return getNewStateAfterAddAction(state, action.payload);

    case wordActionTypes.DELETE_WORD:
      return getNewStateAfterDeleteAction(state, action.payload);

    case wordActionTypes.SHOW_DETAILS:
      return getNewStateAfterShowAction(state, action.payload);

    default:
      return {
        wordsState: wordsReducers(wordsState, action),
        starredWordsState: starredWordsReducer(starredWordsState, action),
      };
  }
}

export default wordsKeeperReducer;
