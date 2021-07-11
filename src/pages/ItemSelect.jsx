import React from "react";
import { Button } from "@material-ui/core";
// import firebase from 'firebase';

const ItemSelect = () => {
  const handleClick = () => {
    if (window.confirm("スタートしますか？")) {
      window.location.href = "/Answer";
    }
  };

  return (
    <div className="item">
      <h1 className="titem_itle">項目選択画面</h1>
      <h3 className="lite_list">一覧表</h3>
      <div className="item_btn">
        <Button
          className="stage-btn"
          variant="contained"
          type="submit"
          onClick={handleClick}
        >
          項目1：
        </Button>
        <Button className="stage-btn" variant="contained" type="submit">
          項目2：
        </Button>
        <Button className="stage-btn" variant="contained" type="submit">
          項目3：
        </Button>
        <Button className="stage-btn" variant="contained" type="submit">
          項目4：
        </Button>
        <Button className="stage-btn" variant="contained" type="submit">
          総合問題：
        </Button>
        <Button className="stage-btn" variant="contained" type="submit">
          ホームへ
        </Button>
      </div>
    </div>
  );
};

export default ItemSelect;
