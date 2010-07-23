/*
---
description: API that draws to the canvas in the image is offered.

license: MIT-style

authors:
- Noritaka Horio

requires:
  core/1.2.4:
  - Core/Core
  - Core/Browser
  - Native/Array
  - Native/Function
  - Native/Number
  - Native/String
  - Native/Hash
  - Native/Event
  - Class/Class
  - Class/Class.Extras
  - Element/Element
  - Element/Element.Event
  - Element/Element.Style
  - Element/Element.Dimensions
  - Utilities/Selecter
  - Utilities/DomReady
  - Fx/Fx
  - Fx/Fx.Transitions

provides: [ImageDrawer, ImageDrawer.Grid, ImageDrawer.Collapses]

...
*/

ImageDrawer.Zoomout = new Class({

	Extends: ImageDrawer,

	options: {
		'canvas': null,
		'source': null,
		'width': 50,
		'duration': 30
	},

	initialize: function(options) {
		this.parent(options);
	},

	onMotion: function(props) {
		var drawHeight = this.height;
		var drawWidth  = this.width;
		this.context.clearRect(this.x, this.y, this.width, this.height);
		this.context.drawImage(this.source,
			props.left, props.top, props.width, props.height,
			props.left, props.top, props.width, props.height);
	},

	setupDrawer: function(canvas) {
		this.parent(canvas);
		this.cols = this.size.x / this.options.width; 
		this.total = this.cols; 
	},

	getContext: function(x, y) {
		var options = this.options;
		return {
			"context": this.context,
			"source": this.source,
			"x": x, "y": y,
			"width": this.size.x,
			"height": this.size.y
		};		
	},

	draw: function(porps) {
		this.parent();

		var op = this.options;
		var duration = op.duration;

		this.drawing = true;
		this.drawers = [];

		this.fireEvent("drawStart");
		var fx = new Fx.ImageDrawer({
			"transition": op.transition,
			"duration": duration,
			"link": "cancel",
			"fps": 30,
			"onMotion":	this.onMotion.bind(porps),
			"onComplete": this.onProgress.bind(this)
		});
		fx.start({
			"left": [0, this.size.x / 2],
			"top": [0, this.size.y / 2],
			"height": [this.size.y, 0],
			"width": [this.size.x, 0]
		});
		duration = duration + op.interval;
		this.drawers.push(fx);
	},

	drawLeft: function() {
		var contexts = [];
		var options = this.options;
//		for (var x = 0; x < this.cols; x++) {
//			var left = x * options.width;
	//		contexts.push(this.getContext(left, 0));
			contexts = this.getContext(0, 0);
//		}
		this.draw(contexts);
	}//,
/*
	drawRight: function() {
		var contexts = [];
		var options = this.options;
		for (var x = this.cols; x > 0; x--) {
			for (var y = 0; y < this.rows; y++) {
				var left = (x - 1) * options.width;
				var top = y * options.height;
				contexts.push(this.getContext(left, top));
			}
		}
		this.draw(contexts);
	},


	drawTop: function() {
		var contexts = [];
		var options = this.options;
		for (var y = 0; y < this.rows; y++) {
			for (var x = 0; x < this.cols; x++) {
				var left = x * options.width;
				var top = y * options.height;
				contexts.push(this.getContext(left, top));
			}
		}
		this.draw(contexts);
	},

	drawBottom: function() {
		var contexts = [];
		var options = this.options;
		for (var y = this.rows; y >= 0; y--) {
			for (var x = 0; x < this.cols; x++) {
				var left = x * options.width;
				var top = y * options.height;
				contexts.push(this.getContext(left, top));
			}
		}
		this.draw(contexts);
	}
*/
});
