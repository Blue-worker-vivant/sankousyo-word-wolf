const bookData = {

  "英語": {

    "万人が知るもの": {
      "単語": [
        "英単語ターゲット1900",
        "システム英単語",
        "必携英単語 LEAP"
      ],

      "熟語": [
        "英熟語ターゲット1000",
        "中学英熟語500"
      ],

      "英文法": [
        "大岩のいちばんはじめの英文法",
        "英文法ポラリス1",
        "ultimate",
        "Evergreen",
        "Vintage"
      ],

      "英文解釈": [
        "超入門英文解釈の技術60",
        "入門英文解釈の技術70",
        "英文解釈の技術100",
        "英文解釈ポラリス",
        "英文熟考 上・下",
        "入門英文問題精講",
        "動画でわかる英文法"
      ],

      "英語長文": [
        "関正夫のThe rules英語長文問題集",
        "英語長文ポラリス",
        "英語長文 レベル別問題集"
      ]
     }
};

function getRandomBooks(subject, difficulty){

  // その科目・難易度のグループを取得
  const groups = bookData[subject][difficulty];

  // グループ名を配列にする
  const groupNames = Object.keys(groups);

  // グループをランダムに1つ選ぶ
  const randomGroup =
    groupNames[Math.floor(Math.random() * groupNames.length)];

  // 選ばれたグループの参考書一覧
  const books = groups[randomGroup];

  // 参考書をシャッフル
  const shuffled = [...books].sort(() => Math.random() - 0.5);

  // 2冊だけ取り出す
  return shuffled.slice(0, 2);
}

const textBooks = getRandomBooks("英語", "万人が知るもの");
console.log(testBooks);
function showLoading(callback){

   // Loading sexを表示
   document.getElementById("loading-screen").style.display = "flex";

   // 0.5秒後に次の処理
   setTimeout(function(){

    // Loading sexを消す
    document.getElementById("loading-screen").style.display = "none";

    // 次の画面へ
    callback();
   }, 500);
}

// パスワード
 const PASSWORD = "sex4545";
 function checkPassword(){
   // 入力されたパスワード
   const input = document.getElementById("password").value;

   // 正しい場合
   if(input === PASSWORD){

     sessionStorage.setItem("loggedIn", "true");

     document.getElementById("lock-screen").style.display = "none";
     document.getElementById("main-screen").style.display = "block";

   }else{
    let message = "パスワードが違うやないかい！";

    // 「sex」が合っている
    if(input.includes("sex")){
     message += "<br>おおいセックスは出来ている";
     }

    // 「4545」が合っている
    if(input.includes("4545")){
     message += "<br>おおいシコることは出来ている";
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

showLoading(function(){

 // 最初の画面を消す
 document.getElementById("start-screen").style.display = "none";

 // おのたや画面を表示
 document.getElementById("wolf-screen").style.display = "block";
});

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

  showLoading(function(){

  // おのたや画面を消す
  document.getElementById("wolf-screen").style.display = "none";

  // 科目選択画面を表示
  document.getElementById("subject-screen").style.display = "block";
});
}

 function checkSubjectMode(){

  const mode =document.querySelector(
   'input[name="subject-mode"]:checked'
  ).value;

  if(mode === "self"){
   goSubjectList();
  }else{
   goDifficultySelect();
  }
}

 function goSubjectList(){
  document.getElementById("subject-screen").style.display = "none";

  document.getElementById("subject-list-screen").style.display = "block";
}

 function checkDifficultyMode(){

  const mode =document.querySelector(
   'input[name="difficulty-mode"]:checked'
  ).value;

  if(mode === "self"){
   goDifficultyList();
  }else{
   goNext();
  }
}

 function goDifficultyList(){
   showLoading(function(){

     document.getElementById("difficulty-screen").style.display = "none";

     document.getElementById("difficulty-list-screen").style.display = "block";
   });
 }

 function goDifficultyFromList(){
  document.getElementById("subject-list-screen").style.display = "none";

  document.getElementById("difficulty-screen").style.display = "block";
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

  if(sessionStorage.getItem("loggedIn") === "true"){
   document.getElementById("lock-screen").style.display = "none";
   document.getElementById("main-screen").style.display = "block";
  }
}

function goHome(){

  document.getElementById("start-screen").style.display = "block";
  document.getElementById("wolf-screen").style.display = "none";
  document.getElementById("subject-screen").style.display = "none";
  document.getElementById("subject-list-screen").style.display = "none";
  document.getElementById("difficulty-screen").style.display = "none";
  document.getElementById("difficulty-list-screen").style.display = "none";
}
