class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		var options = {
			'restitution':0.3,
			'friction':5.0,
			'density':1.0
		}

		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(0, 0, this.r, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball

			pop()
	}

}