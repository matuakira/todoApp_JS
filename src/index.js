import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値取得
  const inputText = document.getElementById("add-text").value;

  // DOM操作・・・面倒くさい。
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  const div2 = document.createElement("div");
  p.appendChild(div2);
  p.innerText = inputText;

  // Completeボタン生成。ここでイベントリスナも設定する。
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  // イベントリスナ
  completeButton.addEventListener("click", () => {
    // ボタンが押された行を特定する。
    const completeTarget = completeButton.parentNode.parentNode.parentNode;

    // ボタンが押された行のTODOの文字列を取得する。
    const todoString =
      completeButton.parentNode.parentNode.firstElementChild.innerText;
    console.log(todoString);

    // 追加のための生成
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.innerText = todoString;

    // Restoreボタン生成。イベントリスナも設定する。
    const restoreButton = document.createElement("button");
    restoreButton.innerText = "Restore";
    //イベントリスナ
    restoreButton.addEventListener("click", () => {
      alert("restore!");
    });

    // Restoreボタンをpタグ配下に置く
    p.appendChild(restoreButton);
    //要素紐づけ
    div.appendChild(p);
    li.appendChild(div);

    // CompletedなTODOの末尾に現在の行を追加する
    document.getElementById("complete-list").appendChild(li);
    // IncompletedなTODOリストから、ボタンが押された行を削除する。
    deleteFromIncompleteList(completeTarget);
  });

  // Deleteボタン生成。ここでイベントリスナも設定する。
  const deleteButton = document.createElement("button");
  // イベントリスナ
  deleteButton.addEventListener("click", () => {
    //　押された削除ボタンの親の親の親(li)を未完了リスト(ul)から削除。
    const deleteTarget = deleteButton.parentNode.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });
  deleteButton.innerText = "Delete";

  // pタグ配下に置く
  p.appendChild(completeButton);
  p.appendChild(deleteButton);

  //要素紐づけ
  div.appendChild(p);
  li.appendChild(div);
  console.log(li);
  // 未完了TODOリストに追加
  document.getElementById("incomplete-list").appendChild(li);

  // テキストボックス初期化
  document.getElementById("add-text").value = "";
};

// 未完了リストから指定ノードを削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// イベント付与
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
