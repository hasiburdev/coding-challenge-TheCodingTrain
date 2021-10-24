class Star {
	constructor() {
        this.avgHeightWeight = (height + width) / 2
		this.x = round(random(-width/2, width/2))
		this.y = round(random(-height/2, height/2))
		this.z = round(random(0, this.avgHeightWeight))
        this.previousZ = this.z
        this.speedAndSize = 0
	}
	show = () => {
        // stroke(0,255,0)

        let currentX = round(map(this.x/this.z, -1, 1, -width,width))
        let currentY = round(map(this.y/this.z, -1, 1, -height, height))
        let previousX = round((this.x/this.previousZ) * (width/2))
        let previousY = round((this.y/this.previousZ) * (height/2))

        // console.log(currentY,previousY)
        // console.log(currentX, previousX)


        fill(244,0,12)
        stroke(255)
        // ellipse(currentX, currentY, this.speedAndSize,this.speedAndSize)
        line(previousX, previousY, currentX, currentY)

        
    }
	update = () => {
        if(this.z <= this.speedAndSize + 1) {
            this.x = round(random(-width/2, width/2))
            this.y = round(random(-height/2, height/2))
            this.z = round(this.avgHeightWeight)
            this.previousZ = this.z


        // console.log(currentY,previousY)
        // console.log(currentX, previousX)
        } else {
            // this.speedAndSize = map(this.z, 0, this.avgHeightWeight, 15, 1)
            this.speedAndSize = map(mouseX, 0, width, 30, 1)
    
            this.previousZ = this.z
            this.z -= this.speedAndSize
        }
    }
}

// export default Star