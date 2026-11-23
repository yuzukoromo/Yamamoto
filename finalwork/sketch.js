// 最終課題を制作しよう




let answer = 0;
let move = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  // 問題文
  fill(0);
  textSize(15);
  text("左右のオレンジ色の円の大きさを比べて、□に当てはまる記号を入れてね！", 100, 40);
  textSize(30);
  text("左の円     □     右の円", 200, 100);
  // 回答方法
fill(0);
textSize(18);
text("Keyを押して解答しよう", 250, 470);
textSize(25);
text("       < : Shift", 250, 500);
text("       > : Enter", 250, 530);
text("       = : Space", 250, 560);

noFill();
stroke(0);
rect(230, 440, 250, 110);


  // 回答する前
  if (answer == 0) {
    drawCircle(200, 300, 15, 70);
    drawCircle(550, 300, 40, 100);
  }



  // 周囲の青い円を常に表示する
  drawCircle(200, 300, 15, 70);
  drawCircle(550, 300, 40, 100);

  // 回答した後
  if (answer > 0) {
    if (move < 175) {
      move = move + 1;
    }

    // 元のオレンジ色の円を白で隠す
    fill(255);
    noStroke();
    circle(200, 300, 60);
    circle(550, 300, 60);

    // オレンジ色の円だけ中央へ移動
    fill(255, 160, 50);
    circle(200 + move, 300, 60);
    circle(550 - move, 300, 60);
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

// 錯視を描く関数
function drawCircle(x, y, size, distance) {

  fill(100, 180, 255);
  noStroke(); 

  // 周囲の青い円を8個描く
  for (let i = 0; i < 8; i++) {
    let angle = TWO_PI * i / 8;
    let a = x + cos(angle) * distance;
    let b = y + sin(angle) * distance;

    circle(a, b, size);
  }

  // 中心のオレンジ色の円
  fill(255, 160, 50);
  circle(x, y, 60);
}

// 選択肢をクリック



function keyPressed() {
  if (answer == 0) {
    if (keyIsDown(SHIFT)) {
      answer = 2;
      move = 0;
    } else if (keyIsDown(ENTER)) {
      answer = 1;
      move = 0;
    } else if (keyIsDown(" ")) {
      answer = 3;
      move = 0;
    }
  }
}

