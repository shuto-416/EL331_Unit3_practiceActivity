const saiten = () => {
  var seikai = 0; //正解数を入れる変数

  //答えの番号を配列に入れる
  var trueAns = new Array(1, 4, 9, 14, 19);

  //正解のラジオボタンがチェックされているか確認
  for (i = 0; i < 5; i++) {
    if (document.radioB.elements[trueAns[i]].checked) {
      seikai++;
    }
  }

  alert("You answered 5 out of " + seikai + "questions correctly.");
};

const check = () => {
  document.getElementById("Answer").hidden = !document.getElementById(
    "Answer"
  ).hidden;
};
