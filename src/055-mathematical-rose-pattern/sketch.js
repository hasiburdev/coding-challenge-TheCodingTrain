let sliderD;
let sliderN;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight)
	sliderD = createSlider(0, 8, 5)
	sliderD.style('position', 'absolute')
	sliderD.style('top', '5vh')
	sliderD.style('left', '5vw')

	sliderN = createSlider(0, 7, 5)
	sliderN.style('position', 'absolute')
	sliderN.style('top', '10vh')
	sliderN.style('left', '5vw')


}

function draw() {
	background(50)
	translate(width/2, height/2)
	let d = sliderD.value()
	let n = sliderN.value()
	let k = n / d
	stroke(255)
	strokeWeight(1)
	noFill()


	beginShape()
	for( let angle = 0; angle < TWO_PI * d; angle += .01) {
		let radius = 200 * cos( k * angle)
		let x = radius * cos(angle)
		let y = radius * sin(angle)
		vertex(x,y)
	}
	endShape(CLOSE)

}
