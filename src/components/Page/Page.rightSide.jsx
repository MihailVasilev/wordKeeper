import React from "react";
import PageList from "./components/PageList";
import DraggableList from "./components/DraggableList";
import SimpleLoader from "../SimpleLoader";

function PageRightSide(props) {
  const { isLoading, data, isViewDraggableList = false } = props;

  let list = <SimpleLoader />;
  if (!isLoading && !!data) {
    if (isViewDraggableList) {
      list = <DraggableList {...props} />;
    } else {
      list = <PageList {...props} />;
    }
  }

  return (
    <div className={isLoading ? "page-rightSide-loading" : "page-rightSide"}>
      {list}
    </div>
  );
}

export default PageRightSide;
