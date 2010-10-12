(function($) {

	window.addEvent('domready', function() {

		var canvases = [];
		var containers = $$('.drawer');
		containers.each(function(element, key) {
			var canvas = document.createElement('canvas');
			canvas.inject(element);
			canvases[key] = canvas;
		});

		var grid = new ImageDrawer.Grid({
			gridHeight: 55,
			gridWidth: 65,
			interval: 70,
			duration: 600
		});

		var expand = new ImageDrawer.Expand({
			slideWidth: 65,
			interval: 70,
			duration: 600,
			transition: 'expo:out'
		});

		var drawImages = ['images/demo1.jpg', 'images/demo2.jpg'];
		var images = Asset.images(drawImages, {
			onComplete: function() {
				grid.setImage(images.shift());
				grid.setCanvas(canvases.shift());

				var methods = $('grid').getElements('li a');
				methods.addEvent('click', function(event) {
					event.stop();
					var t = event.target;
					var method = t.getProperty('href').replace('#', '');
					grid[method]();
				});

				expand.setImage(images.shift());
				expand.setCanvas(canvases.shift());

				methods = $('expand').getElements('li a');
				methods.addEvent('click', function(event) {
					event.stop();
					var t = event.target;
					var method = t.getProperty('href').replace('#', '');
					expand[method]();
				});
			}
		});

	});

}(document.id));
