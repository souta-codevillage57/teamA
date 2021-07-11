import React from "react";
import Tag from "./Tag";

const TagList = (props) => {
  return (
    <>
      <Tag tag={"const"} />
      <Tag tag={"()"} />
      <Tag tag={"="} />
      <Tag tag={"=>"} />
      <Tag tag={"{"} />
      <Tag tag={"}"} />
      <Tag tag={";"} />
    </>
  );
};

export default TagList;
