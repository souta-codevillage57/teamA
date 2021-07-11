import React from "react";
import Question from "./answers/Question";
import TagList from "./answers/TagList";

const Answer = () => {


  return (
    <div className="answer-wrap">
      <h1 className="title">問題解答画面</h1>
      <Question question="アロー関数の形を完成させなさい" />
      <div className="answerBox">
        <TagList />
      </div>
      <button className="next-btn">次へ</button>
    </div>
  );
};

export default Answer;
