"use strict";
// Main js file for Jack Widmer Lab 11.
const canvasPattern = document.getElementById("canvasPattern");
const canvasImage = document.getElementById("canvasImage");
const patternContext = canvasPattern.getContext("2d");
const imageContext = canvasImage.getContext("2d");

function clearPatternCanvas() {
	patternContext.clearRect(0, 0, canvasPattern.width, canvasPattern.height);
}
function clearPhotoCanvas() {
	imageContext.clearRect(0, 0, canvasPattern.width, canvasPattern.height);
}

function pattern1() {
	let color1 = "#D0C91F", color2 = "#FF4C65";
	let numberOfStripes = 50;
	for (var i = 0; i < numberOfStripes; i++) {
		var thickness = 500 / numberOfStripes;
		patternContext.beginPath();
		patternContext.strokeStyle = i % 2 ? color1 : color2;
		patternContext.lineWidth = thickness;

		patternContext.moveTo(i * thickness + thickness / 2, 0);
		patternContext.lineTo(i * thickness + thickness / 2, 500);
		patternContext.stroke();
	}

}

function pattern2() {
	let colors = ["#75EB00", "#53BBF4", "#FF85CB", "#FF432E", "#FFAC00",];

	for (var i = 0; i < 10; i++) {
		patternContext.beginPath();
		patternContext.strokeStyle = colors[i % colors.length];
		patternContext.lineWidth = Math.random() * 40;
		patternContext.moveTo(Math.random() * 500, Math.random() * 300); patternContext.lineTo(Math.random() * 300, Math.random() * 500);
		patternContext.stroke();
	}
}

function pattern3() {
	const width = 500
	const height = 500

	canvasPattern.width = width
	canvasPattern.height = height


	const drawFillRect = (x, y, width, height, hexColor, patternContext) => {
		patternContext.beginPath()
		patternContext.rect(x, y, width, height)
		patternContext.fillStyle = hexColor
		patternContext.fill()
	}

	// background color
	drawFillRect(20, 20, 460, 460, "#FAFCF1", patternContext)

	// rectangle at the center
	drawFillRect((width / 2) - 100, (height / 2) - 150, 200, 300, "#F26D85", patternContext)


	// rectangle 2
	drawFillRect(280, 20, 120, 190, "#E97FF4", patternContext)

	// circle 1
	patternContext.beginPath()
	patternContext.arc(347, 260, 50, 0, 2 * Math.PI)
	patternContext.fillStyle = "#9193F6"
	patternContext.fill()

	// rectangle 3
	drawFillRect(80, 300, 100, 110, "#A4F3F8", patternContext)

	// triangle
	patternContext.beginPath();
	patternContext.moveTo(250, 400);
	patternContext.lineTo(200, 450);
	patternContext.lineTo(300, 450);
	patternContext.closePath()
	patternContext.fillStyle = "#B6FAC1"
	patternContext.fill();
}

function photo1() {
	let image1 = document.createElement("img");
	image1.src = "image1.jpg";
	imageContext.drawImage(image1, 0, 0, 500, 300);
}

function photo2() {
	let image2 = document.createElement("img");
	image2.src = "image2.jpg";
	imageContext.drawImage(image2, 0, 0, 500, 300);
}