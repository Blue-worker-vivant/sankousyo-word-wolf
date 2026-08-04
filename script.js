function goWolfSelect(){
 // 選んだ人数を取得
 const playersText = document.getElementById("players").value;

 //「5人」→5に変換
 const players = Number(playersText.replace("人",""));
 
 // 最初の画面を消す
 document.getElementById("start-screen").style.display = "none";

 // おのたや画面を表示
 document.getElementById("wolf-screen").style.display = "block";

 // おのたや選択肢を作る
 const wolfSelect = document.getElementById("wolf-count");

 // 一度リセット
 wolfSelect.innerHTML = "";

 // 1人〜n-2人まで追加
 for(let i = 1; i <= players - 2; i++){
  const option = document.createElement("option");
  option.textContent = i + "人";
  wolfSelect.appendChild(option);
 }

 // 最初の人数表示
 updatePeople();

  // 変更したら人数更新
 wolfSelect.addEventListener("change", updatePeople);
}

// 市民人数表示
function updatePeople(){

 const playersText = document.getElementById("players").value;
 const players = Number(playersText.replace("人",""));

 const wolfText = document.getElementById("wolf-count").value;
 const wolves = Number(wolfText.replace("人",""));

 const citizens = players - wolves;

 document.getElementById("people-info").textContent =
  "市民：" + citizens + "人  おのたや：" + wolves + "人";
}
