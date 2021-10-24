// import Star from './Star.js'

const stars = []
const MAX_LEN = 200

// console.log(Star)

function setup() {
	createCanvas(windowWidth, windowHeight)

	for(let i = 0; i< MAX_LEN; i++) {
		stars.push(new Star())
	}
}

function draw() {
	background(0)
	translate(width/2, height/2)

	for(let star of stars) {
		star.update()
		star.show()
	}
	// noLoop()
}
