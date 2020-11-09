import React from "react";
import PageLeftSide from "./Page.leftSide";
import PageRightSide from "./Page.rightSide";
import "./Page.style.scss";

function Page({ leftSideProps, rightSideProps }) {
  return (
    <div className="page-container">
      <PageLeftSide {...leftSideProps} />
      <PageRightSide {...rightSideProps} />
    </div>
  );
}

export default Page;
