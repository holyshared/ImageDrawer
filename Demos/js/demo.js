(function($) {

	window.addEvent('domready', function() {

		var canvases = [];
		var containers = $$('.canvasContainer');
		containers.each(function(element, key) {
			var canvas = document.createElement('canvas');
			canvas.inject(element);
			canvases[key] = canvas;
		});

		var grid = new ImageDrawer.Grid({
			'gridHeight': 55,
			'gridWidth': 65,
			'interval': 70,
			'duration': 600
		});

		var expand = new ImageDrawer.Expand({
			'slideWidth': 65,
			'interval': 70,
			'duration': 600
		});

		var drawImages = ["images/demo1.jpg", "images/demo2.jpg"];
		var images = Asset.images(drawImages, {
			"onComplete": function() {
			var methods = $("grid").getElements("li a");
			methods.addEvent("click", function(event) {
				event.stop();
				var t = event.target;
				var method = t.getProperty("href").replace("#", "");
				grid.setCanvas(canvases[0]);
				grid.setImage(images[0]);
				grid[method]();
			});

			methods = $("expand").getElements("li a");
			methods.addEvent("click", function(event) {
				event.stop();
				var t = event.target;
				var method = t.getProperty("href").replace("#", "");
				expand.setCanvas(canvases[1]);
				expand.setImage(images[1]);
				expand[method]();
			});
			}
		});

	});

}(document.id));
