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

        let currentX = round(map(this.x/this.z, -1, 1, -width,width))
        let currentY = round(map(this.y/this.z, -1, 1, -height, height))
        let previousX = round((this.x/this.previousZ) * (width/2))
        let previousY = round((this.y/this.previousZ) * (height/2))

        stroke(255, 200)
        // ellipse(currentX, currentY, this.speedAndSize,this.speedAndSize)
        line(previousX, previousY, currentX, currentY)

        
    }
	update = () => {
        if(this.z <= this.speedAndSize + 1) {
            this.x = round(random(-width/2, width/2))
            this.y = round(random(-height/2, height/2))
            this.z = round(this.avgHeightWeight)
            this.previousZ = this.z
        } else {
            this.speedAndSize = map(mouseX, 0, width, 1, 30)    
            this.previousZ = this.z
            this.z -= this.speedAndSize
        }
    }
}

// export default Star