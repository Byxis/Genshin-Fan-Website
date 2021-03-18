const circle = new mojs.Shape({
	left: 0,
	top: 0,
	strokeWidth: 8,
	fill: 'none',
	radius: 80,
	scale: { 0 : 0.5 },
	opacity: {1 : 0},
	shape: 'circle',
	stroke: '#614b46',
	strokeWidth: 8,
	fill: 'none',
	duration: 500,
});

document.onclick = (e) => {
	const position = {
		x: e.pageX,
		y: e.pageY
	}
	circle.tune(position);
	circle.replay();
	circle.delete;
}