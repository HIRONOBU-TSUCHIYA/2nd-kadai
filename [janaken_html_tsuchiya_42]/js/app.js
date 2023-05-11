$("#h1").html ( color = "red" );

$("#gu_btn").on("click",function(){
  var random = Math.floor(Math.random() * 3 + 1);
  console.log(random, "ランダムな数字の箱");
  var result = ""
  var judgment = ""
  if (random === 1) {
    console.log("グー");
    result = '<img src="img/gu-1.png" alt="">'
    judgment = "【　あいこ　】"
  } else if (random === 2) {
    console.log("チョキ");
    result = '<img src="img/cho-1.png" alt="">'
    judgment = "【　勝ち　】"
  } else if (random === 3) {
    console.log("パー");
    result = '<img src="img/pa-1.png" alt="">'
    judgment = "【　負け　】"
  }
    $("#pc_hands").html(result);
    $("#pc_hands").css("background-color","red");
    $("#pc_hands").fadeOut(100).fadeIn(100);
    $("#judgment").fadeOut(1).fadeIn(800);
    $("#judgment").html(judgment);
    $("#judgment").css("font-size","50px");
    $("#judgment").css("background-color","red");
    $("#judgment").css("color","black");
    
});

$("#cho_btn").on("click",function(){
  var random = Math.floor(Math.random() * 3 + 1);
  console.log(random, "ランダムな数字の箱");
  var result = ""
  var judgment = ""
  if (random === 1) {
    console.log("グー");
    result = '<img src="img/gu-1.png" alt="">'
    judgment = "【　負け　】"
  } else if (random === 2) {
    console.log("チョキ");
    result = '<img src="img/cho-1.png" alt="">'
    judgment = "【　あいこ　】"
  } else if (random === 3) {
    console.log("パー");
    result = '<img src="img/pa-1.png" alt="">'
    judgment = "【　勝ち　】"
  }
    $("#pc_hands").html(result);
    $("#pc_hands").css("background-color","orange");
    $("#pc_hands").fadeOut(100).fadeIn(100);
    $("#judgment").fadeOut(1).fadeIn(800);
    $("#judgment").html(judgment);
    $("#judgment").css("font-size","50px");
    $("#judgment").css("background-color","red");
    $("#judgment").css("color","orange");
});

$("#par_btn").on("click",function(){
var random = Math.floor(Math.random() * 3 + 1);
console.log(random, "ランダムな数字の箱");
var result = ""
var judgment = ""
if (random === 1) {
  console.log("グー");
  result = '<img src="img/gu-1.png" alt="">'; //なぜ画像にならないのか？
  judgment = "【　勝ち　】"
} else if (random === 2) {
  console.log("チョキ");
  result = '<img src="img/cho-1.png" alt="">'
  judgment = "【　負け　】"
} else if (random === 3) {
  console.log("パー");
  result = '<img src="img/pa-1.png" alt="">'
  judgment = "【　あいこ　】"
}
  $("#pc_hands").html(result);
  $("#pc_hands").css("background-color","blue");
  $("#pc_hands").fadeOut(100).fadeIn(100);
  $("#judgment").fadeOut(1).fadeIn(800);
  $("#judgment").html(judgment);
  $("#judgment").css("font-size","50px");
  $("#judgment").css("background-color","red");
  $("#judgment").css("color","blue");
});

//$("win")
var win = "" 
console.count("勝利");
for (let i = 0 ; i > 5 ; i++){
  console.count();
}
for (let i = 0 ; i > 3 ; i++){
  console.count('勝利');
}




$("#btn").on("click",function(){
  $("")
});


//ジャンケンの勝敗表をカウント数できるようにする引数
//その勝敗数に対応して変化が起きるようにする。

// var random = Math.floor(Math.random() * 3 + 1);
// console.log(random, "ランダムな数字の箱");

// var result = ""

// if (random === 1) {
//   console.log("グー");
//   result = "グー"
// } else if (random === 2) {
//   console.log("チョキ");
//   result = "チョキ"
// } else if (random === 3) {
//   console.log("パー");
//   result = "パー"
// }

$("#judgment") //引数　