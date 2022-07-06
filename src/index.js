import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値取得
  const inputText = document.getElementById("add-text").value;

  // DOM操作・・・面倒くさい。
  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = inputText;

  // Completeボタン生成。ここでイベントリスナも設定する。
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  // イベントリスナ
  completeButton.addEventListener("click", () => {
    // ボタンが押された行を特定する。
    const completeTarget = completeButton.parentNode;
    // ボタンが押された行のTODOの文字列を取得する。
    const todoString = completeTarget.firstElementChild.innerText;

    deleteFromIncompleteList(completeTarget);
    // div以下を初期化する
    completeTarget.textContent = null;

    // Restoreボタン定義、イベントリスナ
    const restoreButton = document.createElement("button");
    restoreButton.addEventListener("click", () => {
      const restoreTarget = restoreButton.parentNode;
      const restoreString = restoreTarget.firstElementChild.innerText;

      document.getElementById("complete-list").removeChild(restoreTarget);

      restoreTarget.textContent = null;
      const li = document.createElement("li");
      li.innerText = restoreString;
      restoreTarget.appendChild(li);
      // CompleteボタンとDeleteボタンは再利用
      restoreTarget.appendChild(completeButton);
      restoreTarget.appendChild(deleteButton);

      document.getElementById("incomplete-list").appendChild(restoreTarget);
    });
    restoreButton.innerText = "Restore";

    const resLi = document.createElement("li");
    resLi.innerText = todoString;

    completeTarget.appendChild(resLi);
    completeTarget.appendChild(restoreButton);

    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // Deleteボタン生成。ここでイベントリスナも設定する。
  const deleteButton = document.createElement("button");
  // イベントリスナ
  deleteButton.addEventListener("click", () => {
    //　押された削除ボタンの親の親の親(li)を未完了リスト(ul)から削除。
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });
  deleteButton.innerText = "Delete";

  // divタグ配下に置く
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  console.log(div);
  // 未完了TODOリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  // テキストボックス初期化
  document.getElementById("add-text").value = "";
};

// Completeボタン
const defineCompleteButton = () => {};

// DeletButton

// 未完了リストから指定ノードを削除する
const deleteFromIncompleteList = (target, id) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// イベント付与
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
