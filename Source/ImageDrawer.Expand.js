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

provides: [ImageDrawer, ImageDrawer.Grid, ImageDrawer.Expand]

...
*/

ImageDrawer.Expand = new Class({

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
		this.context.clearRect(this.drawX, this.drawY, this.drawWidth, this.drawHeight);
		this.context.globalAlpha = props.opacity;
		this.context.drawImage(this.source,
			this.drawX, props.top, this.drawWidth, props.height,
			this.drawX, props.top, this.drawWidth, props.height);
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
			"drawX": x,
			"drawY": y,
			"drawHeight": this.size.y,
			"drawWidth": options.width
		};		
	},

	draw: function(porps) {
		this.parent();

		var op = this.options;
		var duration = op.duration;

		this.drawing = true;
		this.drawers = [];

		porps.each(function(p, k) {
			var fx = new Fx.ImageDrawer({
				"transition": op.transition,
				"duration": duration,
				"link": "cancel",
				"fps": 30,
				"onMotion":	this.onMotion.bind(p),
				"onComplete": this.onProgress.bind(this)
			});

			fx.start({
				"top": [this.size.y / 2, 0],
				"height": [0, this.size.y],
				"opacity": [0, 1]
			});

			duration = duration + op.interval;
			this.drawers.push(fx);
		}, this);
	},

	drawLeft: function() {
		var contexts = [];
		var options = this.options;
		for (var x = 0; x < this.cols; x++) {
			var left = x * options.width;
			contexts.push(this.getContext(left, 0));
		}
		this.draw(contexts);
	},

	drawRight: function() {
		var contexts = [];
		var options = this.options;
		for (var x = this.cols; x > 0; x--) {
			var left = (x - 1) * options.width;
			contexts.push(this.getContext(left, 0));
		}
		this.draw(contexts);
	}

});