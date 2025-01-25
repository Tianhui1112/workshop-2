let timeoutCount = 0;  // 用于记录 setTimeout 的次数
let intervalCount = 0;  // 用于记录 setInterval 的次数

function setup() {
  createCanvas(400, 400);
  background(220); // 设置背景为灰色

  // 使用 setTimeout 延迟调用绘制三角形的函数
  setTimeout(() => {
    drawMultipleTriangles();  // 在 2 秒后调用绘制多个三角形
  }, 2000); // 延迟 2000 毫秒（即 2 秒）

  // 使用 setInterval 每 1 秒绘制一次三角形
  setInterval(() => {
    drawSingleTriangles(random(width), random(height), random(width), random(height), random(width), random(height));
    intervalCount++;
    console.log(`setInterval: 绘制了 ${intervalCount} 次三角形`);
  }, 1000); // 每 1000 毫秒（即 1 秒）执行一次绘制三角形
}

// 定义一个绘制多个三角形的函数
function drawMultipleTriangles() {
  // 循环调用 drawSingleTriangles 函数，绘制多个随机位置的三角形
  for (let i = 0; i < 10; i++) { // 循环 10 次
    let x1 = random(width); // 随机生成第一个顶点的 x 坐标
    let y1 = random(height); // 随机生成第一个顶点的 y 坐标
    let x2 = random(width); // 随机生成第二个顶点的 x 坐标
    let y2 = random(height); // 随机生成第二个顶点的 y 坐标
    let x3 = random(width); // 随机生成第三个顶点的 x 坐标
    let y3 = random(height); // 随机生成第三个顶点的 y 坐标

    // 调用 drawSingleTriangles 函数来绘制一个三角形
    drawSingleTriangles(x1, y1, x2, y2, x3, y3); // 使用随机的坐标绘制三角形
  }
}

// 定义绘制单个三角形的函数
function drawSingleTriangles(x1, y1, x2, y2, x3, y3) {
  fill(random(255), random(255), random(255)); // 随机填充颜色
  stroke(random(255)); // 随机边框颜色
  triangle(x1, y1, x2, y2, x3, y3); // 绘制三角形
}