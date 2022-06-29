import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//受け取ったpropsをコールバックの引数に
export const ChildArea = memo((props) => {
  //Object型のpropsから分割代入で取り出す
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされました。");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    //三項演算子でtrueなら文字の表示
    //falseならnullとする
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
