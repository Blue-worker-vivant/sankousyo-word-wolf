 // パスワード
 const PASSWORD = "sex4545";
 function checkPassword(){
   // 入力されたパスワード
   const input = document.getElementById("password").value;

   // 正しい場合
   if(input === PASSWORD){

     document.getElementById("lock-screen").style.display = "none";
     document.getElementById("main-screen").style.display = "block";

   }else{
    let message = "パスワードが違うやないかい！";

    // 「sex」が合っている
    if(input.includes("sex")){
     message += "<br>セックスは出来ている";
     }

    // 「4545」が合っている
    if(input.includes("4545")){
     message += "<br>シコることは出来ている";
    }

    document.getElementById("password-error").innerHTML = message;
   }
 }

//
function togglePassword(){

  const passwordBox = document.getElementById("password");

  if(passwordBox.type === "password"){
    passwordBox.type = "text";
  }else{
    passwordBox.type = "password";
  }
}

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

function goSubjectSelect(){

  // おのたや画面を消す
  document.getElementById("wolf-screen").style.display = "none";

  // 科目選択画面を表示
  document.getElementById("subject-screen").style.display = "block";
}

 function goDifficultySelect(){
  // 科目選択画面を隠す
  document.getElementById("subject-screen").style.display = "none";

  // 難易度画面を表示
  document.getElementById("difficulty-screen").style.display = "block";
}

  function goNext(){
   alert("ここから先は次回作るぜえー");
}


 function updateNews(){

  // すべてのニュースを取得
  const items = document.querySelectorAll(".news-item");

  // 今日の日付
  const today = new Date();

  items.forEach(item => {

    // 日付
    const dateElement = item.querySelector(".news-date");

    // NEW表示を作る
    const newElement = document.createElement("span");
    newElement.className = "news-new";
    newElement.textContent = "---NEW---";

    // data-dateを取得
    const dateText = dateElement.dataset.date;

    // Date型へ変換
    const newsDate = new Date(dateText);

    // 日数差を計算
    const diff = (today - newsDate) / (1000 * 60 * 60 * 24);

    // 3日以内ならNEWを表示
    if(diff < 3){
      dateElement.after(newElement);
    }
});

 }

window.onload = function(){
  updateNews();
}
