import React from "react";

function ItemList(props) {
  const {
    id,
    word,
    meaning,
    definition,
    isViewDetails,
    phonetic,
    isStarred,
    addWord,
    deleteWord,
    showDetails,
    isDraggable = false,
  } = props;

  const onClickStar = (event) => {
    event.stopPropagation();

    if (!isStarred) {
      !!addWord && addWord(id);
      return;
    }
    !!deleteWord && deleteWord(id);
  };

  const handleShowDetails = () => {
    showDetails(id);
  };

  return (
    <li>
      <div className="word" onClick={handleShowDetails}>
         {isDraggable && <i className="fa fa-bars i-drag" />}
        <div>{word}</div>
        <div>{meaning}</div>
        <div>{`${definition.toLowerCase().slice(0, 35)} ...`}</div>
        <div onClick={onClickStar}>
          <i className={`fa fa-star${isStarred ? "" : "-o"}`} />
        </div>
      </div>
      <div className={isViewDetails ? "desc active" : "desc not-active"}>
        <div>{`~${phonetic}~`}</div>
        <div>{`${definition.toLowerCase()} etc.`}</div>
      </div>
    </li>
  );
}

export default ItemList;
