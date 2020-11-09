import { mappingFilter } from "../utils";

const getItemFromWordsList = (data, id, isStarred = true) => [
  {
    ...data.find((item) => item.id === id),
    isStarred,
    isViewDetails: false,
  },
];

const getFiltersByStarredWords = (starredWords) => {
  const meaningWords = starredWords.map((word) => word.meaning);
  const uniqMeaningWords = [...new Set(meaningWords)];
  const filters = uniqMeaningWords.map((meaning, id) =>
    mappingFilter(id, meaning, false)
  );

  return filters;
};

function getNewStateAfterAddAction(state, id) {
  const { wordsState, starredWordsState } = state;

  const newWordsState = wordsState.data.map((item) =>
    item.id !== id ? item : { ...item, isStarred: true }
  );

  const newStarredWord = getItemFromWordsList(wordsState.data, id);
  const newStarredWords = [...starredWordsState.data, ...newStarredWord];

  return {
    ...state,
    wordsState: {
      ...wordsState,
      data: newWordsState,
    },
    starredWordsState: {
      ...starredWordsState,
      data: newStarredWords,
      filters: getFiltersByStarredWords(newStarredWords),
    },
  };
}

function getNewStateAfterDeleteAction(state, id) {
  const { wordsState, starredWordsState } = state;

  const isSomeId = wordsState.data.some((item) => item.id === id);
  const newWordsState = wordsState.data.map((item) =>
    item.id !== id ? item : { ...item, isStarred: false }
  );

  const filteredStarredWords = starredWordsState.data.filter(
    (i) => i.id !== id
  );

  return {
    ...state,
    wordsState: {
      ...wordsState,
      data: isSomeId ? newWordsState : wordsState.data,
    },
    starredWordsState: {
      ...starredWordsState,
      data: filteredStarredWords,
      filters: getFiltersByStarredWords(filteredStarredWords),
    },
  };
}

function getNewStateAfterShowAction(state, { id, forStarred }) {
  const { wordsState, starredWordsState } = state;

  const getNewState = (data) =>
    data.map((item) =>
      item.id !== id ? item : { ...item, isViewDetails: !item.isViewDetails }
    );

  return {
    ...state,
    [forStarred ? "starredWordsState" : "wordsState"]: {
      ...(forStarred ? starredWordsState : wordsState),
      data: getNewState(forStarred ? starredWordsState.data : wordsState.data),
    },
  };
}

function getNewStarredStateAfterReorder(state, payload) {
  const reorderState = (list, { startIndex, endIndex }) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return {
    ...state,
    data: reorderState(state.data, payload),
  };
}

function getNewStarredStateAfterFilter(state, payload) {
  const { filters } = state;

  const newFiltersState = filters.map((item) => {
    if (item.label !== payload) {
      if (item.isChecked) {
        return {
          ...item,
          isChecked: false,
        };
      }
      return item;
    }
    return { ...item, isChecked: true };
  });

  return {
    ...state,
    filters: newFiltersState,
    currentFilter: payload,
  };
}

export const commonHelpers = {
  getNewStateAfterShowAction,
  getNewStateAfterDeleteAction,
  getNewStateAfterAddAction,
};
export const starredHelpers = {
  getNewStarredStateAfterReorder,
  getNewStarredStateAfterFilter,
};
export const wordsHelpers = {};
