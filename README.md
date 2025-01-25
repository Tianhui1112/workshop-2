# workshop_2:

You can view the generated effect by visiting the following link:

[View Workshop 2 Effect](  https://tianhui1112.github.io/workshop-2/)


## Overview
This project creates a 400x400 canvas where triangles are drawn at random positions. It uses `setTimeout` to draw multiple triangles after a delay and `setInterval` to draw a single triangle every second. The number of times each function is called is recorded and printed in the terminal.

## Features: 
- Initially, 10 triangles are drawn after a 2-second delay using `setTimeout`. 
- Every second, a new triangle is drawn using `setInterval`. 
- The count of triangles drawn by `setInterval` is printed to the terminal.

## VSCode Environment Setup
1.1:
To run this project in **VSCode**, you need to have **Node.js** and **p5.js** set up properly. Follow these steps:
### Step 1: Install Node.js
1. Visit the official Node.js website: [Download Node.js](https://nodejs.org/en/download/).
2. Download and install the latest LTS version for your operating system.
3. Follow the installation instructions specific to your system.

1.2:
1. Open the terminal in VSCode.
2. Run the following command to verify that Node.js is installed correctly:
```bash 
node -v
```

1.3:
Since this project uses the p5.js library, you'll need to install it using npm (Node Package Manager).
Open the terminal in VSCode and run the following command to install p5.js:
```bash 
npm install p5
```

1.4:
Create a new folder for your project.
Inside that folder, create a file named sketch.js and paste the JavaScript code from the project.
To run the project, you'll need a basic HTML file to load the p5.js library and your script. Here is an example of the HTML file (index.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Triangle Drawing</title>
  <script src="node_modules/p5/lib/p5.js"></script> <!-- Path to p5.js -->
  <script src="sketch.js"></script> <!-- Your JavaScript file -->
</head>
<body>
</body>
</html>

```
Open the index.html file in a browser, and you should see the triangles drawn on the canvas.


## Project workflow

1.1:  Initialize Variables
We initialize two variables, timeoutCount and intervalCount, to keep track of the number of times setTimeout and setInterval are called, respectively.

```javascript
let timeoutCount = 0; // Used to record the number of times setTimeout is called
let intervalCount = 0; // Used to record the number of times setInterval is called
```

1.2: Create Canvas
In the setup() function, we create a 400x400 canvas and set the background color to grayscale (220).

```javascript
function setup() {
  createCanvas(400, 400);  // Create a 400x400 canvas
  background(220);         // Set the background color to light gray
}

```

1.3: Set setTimeout

We use setTimeout to delay the drawing of 10 triangles. After 2 seconds, the function drawMultipleTriangles() will be called.

```javascript
setTimeout(() => {
  drawMultipleTriangles();  // Draw 10 triangles after 2 seconds
}, 2000);  // Delay of 2000 milliseconds (2 seconds)

```


1.4: Set setInterval

We use setInterval to draw a single triangle every 1 second. The intervalCount variable is updated with each interval and printed to the terminal.
```javascript
setInterval(() => {
  drawSingleTriangles(
    random(width), random(height),
    random(width), random(height),
    random(width), random(height)
  );
  intervalCount++;  // Increment the interval count
  console.log(`setInterval: Drew a triangle ${intervalCount} times`);  // Log the count to terminal
}, 1000);  // Draw a triangle every 1000 milliseconds (1 second)


```
1.5: Draw Multiple Triangles
The function drawMultipleTriangles() draws 10 triangles at random positions. It calls the drawSingleTriangles() function for each triangle.
```javascript
function drawMultipleTriangles() {
  for (let i = 0; i < 10; i++) {  // Loop 10 times to draw 10 triangles
    let x1 = random(width), y1 = random(height);
    let x2 = random(width), y2 = random(height);
    let x3 = random(width), y3 = random(height);
    drawSingleTriangles(x1, y1, x2, y2, x3, y3);  // Call function to draw each triangle
  }
}


```

1.6: Draw Single Triangle
The drawSingleTriangles() function draws a single triangle using random vertex coordinates. Each triangle is filled with a random color and has a random stroke color.
```javascript
function drawSingleTriangles(x1, y1, x2, y2, x3, y3) {
  fill(random(255), random(255), random(255));  // Random fill color
  stroke(random(255));  // Random stroke color
  triangle(x1, y1, x2, y2, x3, y3);  // Draw the triangle
}



```
