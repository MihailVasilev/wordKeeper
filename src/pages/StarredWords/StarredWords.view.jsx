import React from "react";
import Page from "../../components/Page";
import "./style/StarredWords.scss";

export default function View(props) {
  return (
    <>
      <div className="title">{"Starred words"}</div>
      <Page {...props} />
    </>
  );
}
