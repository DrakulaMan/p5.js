var bubbles = [];
var c = 1;
class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = color(0, 0, 0);
	}
	move() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}

	show() {
		stroke(255);
		strokeWeight(4);
		fill(this.color);
		ellipse(this.x, this.y, this.r, this.r);
	}
	clicked() {
		var d = dist(mouseX, mouseY, this.x, this.y);
		if (d < this.r) {
			console.log("object.class.bubble.clicked");
			if (c === 1) {
				this.color = color(255, 0, 0);
				c = 0;
			} else {
				this.color = color(0, 0, 0);
				c = 1;
			}
		}
	}
}

function setup() {
	createCanvas(600, 600);
	for (var i = 0; i < 5; i++) {
		var x = random(width);
		var y = random(height);
		var r = random(15, 30);
		bubbles[i] = new Bubble(x, y, r);
	}
}


function mousePressed() {
	console.log("object.class.background.clicked");
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].clicked();
	}
}


function draw() {
	background(0, 0, 0);
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}
}