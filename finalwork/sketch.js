
let answer = 0;
let move = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  // 問題文
  fill(0);
  noStroke();
  textSize(15);
  text("左右のオレンジ色の円の大きさを比べて、□に当てはまる記号を入れてね！", 100, 40);

  textSize(30);
  text("左の円     □     右の円", 200, 100);

  // 回答方法
  textSize(18);
  text("キーボードで記号を入力して解答しよう", 250, 470);
  textSize(15);
  text("Shift + , で < を入力", 250, 500);
  text("Shift + . で > を入力", 250, 520);
  text("Shift + - で = を入力", 250, 540);

  // 周囲の青い円
  drawBlueCircle(200, 300, 15, 70);
  drawBlueCircle(550, 300, 40, 100);

  // オレンジ色の円
  fill(255, 160, 50);
  noStroke();
  circle(200 + move, 300, 60);
  circle(550 - move, 300, 60);

  // 回答後に円を動かす
  if (answer > 0) {
    if (move < 175) {
      move = move + 1;
    }
  }

  // 正解・不正解
  if (move == 175) {
    textSize(20);

    if (answer == 3) {
      fill(0, 150, 0);
      text("正解！実は同じ大きさ！", 240, 405);
    } else {
      fill(255, 0, 0);
      text("残念！実は同じ大きさ！", 240, 405);
    }
  }
}

// 周囲の青い円を描く関数
function drawBlueCircle(x, y, size, distance) {
  fill(100, 180, 255);
  noStroke();

  for (let i = 0; i < 8; i++) {
    let angle = TWO_PI * i / 8;
    let a = x + cos(angle) * distance;
    let b = y + sin(angle) * distance;

    circle(a, b, size);
  }
}

// キーボードで回答する
function keyTyped() {
  if (answer == 0) {
    if (key == "<") {
      answer = 2;
    } else if (key == ">") {
      answer = 1;
    } else if (key == "=") {
      answer = 3;
    }
  }
}

