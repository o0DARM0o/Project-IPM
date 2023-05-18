class Target {
	constructor(row, column, nWords, w, l, id) {
		this.numWords = nWords;
		this.width = w;
		this.label = l;
		this.id = id;
		this.x = 40 + (h_margin + this.width) * (column - 1) + this.width / 2;
		this.y = 40 + (v_margin + this.width) * (row - 1) + this.width / 2;
	}

	// Checks if a mouse click took place
	// within the target
	clicked(mouse_x, mouse_y) {
		return (
			this.label[0] === letra_target && dist(this.x + (this.width/2), this.y + (this.width/2), mouse_x, mouse_y) < this.width / 2
		);
	}

	// Draws the target (i.e., a circle)
	// and its label
	draw() {
		switch (this.numWords) {
			case 1:
				fill(color(128, 0, 128));
				break;
			case 2:
				fill(color(255, 20, 147));
				break;
			case 3:
				fill(color(67, 0, 150));
				break;
			default:
				fill(color(155, 155, 155));
		}
		rect(this.x, this.y, this.width);
		// Draw label
		textFont("Arial", 18);
		textAlign(CENTER, CENTER);
		textStyle(BOLD);
		fill(color(255, 255, 255));
		text(this.label, this.x + (this.width/2), this.y + (this.width/2));
		textStyle(NORMAL);
	}
}