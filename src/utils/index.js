import uuid from "react-uuid";

// helpers ...
export const getStringToLowerCase = (str) => str.toLowerCase();

export const getConvertedStringToArray = (str) =>
  getStringToLowerCase(str).split("");

export const getUpperFirstCharOfString = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const alphabetSortedArrayByField = (array, fieldBySort = "word") =>
  !!array &&
  array.sort((a, b) => {
    let fieldA = getStringToLowerCase(a[fieldBySort]);
    let fieldB = getStringToLowerCase(b[fieldBySort]);

    if (fieldA < fieldB) {
      return -1;
    }

    if (fieldA > fieldB) {
      return 1;
    }

    return 0;
  });

// Mapping ...
export const mappingDictionary = (array) =>
  array.map((item) => ({
    id: uuid(),
    word: getUpperFirstCharOfString(item.word),
    meaning: item.meanings[0].partOfSpeech || "",
    definition: item.meanings[0].definitions[0].definition || "",
    phonetic: item.phonetics[0].text || "",
    isStarred: false,
    isViewDetails: false,
  }));

export const mappingFilter = (id, label, isChecked) => ({
  id,
  label,
  isChecked,
});

// Filters ...
export const getVisibleStarredByFilter = (
  data,
  filters,
  currentFilter = ""
) => {
  if (!currentFilter.length || (!filters.length && !data.length)) {
    return data;
  }

  let filteredData = data;
  filters.forEach((filter) => {
    if (currentFilter === filter.label) {
      filteredData = data.filter((i) => i.meaning === filter.label);
    }
  });

  return filteredData;
};

export const getVisibleStarredBySearch = (data, search = "") => {
  if (!search.length || !data.length) {
    return data;
  }

  const filtered = data.filter((item) => {
    const splittedWord = getConvertedStringToArray(item.word);
    const splittedSearch = getConvertedStringToArray(search);
    const searchLength = splittedSearch.length;

    return splittedSearch.some(
      (char) => char === splittedWord[searchLength - 1]
    );
  });

  return filtered;
};

// etc...
