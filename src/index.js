import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値取得
  const inputText = document.getElementById("add-text").value;

  // DOM操作・・・面倒くさい。
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.innerText = inputText;

  // Completeボタン生成。ここでイベントリスナも設定する。
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  // イベントリスナ
  completeButton.addEventListener("click", () => {
    alert("Complete");
  });

  // Deleteボタン生成。ここでイベントリスナも設定する。
  const deleteButton = document.createElement("button");
  // イベントリスナ
  deleteButton.addEventListener("click", () => {
    //　押された削除ボタンの親の親の親(li)を未完了リストから削除。
    const deleteTarget = deleteButton.parentNode.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  deleteButton.innerText = "Delete";

  // pタグ配下に置く
  p.appendChild(completeButton);
  p.appendChild(deleteButton);

  //要素紐づけ
  div.appendChild(p);
  li.appendChild(div);

  // 未完了TODOリストに追加
  document.getElementById("incomplete-list").appendChild(li);

  // テキストボックス初期化
  document.getElementById("add-text").value = "";
};

// イベント付与
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
