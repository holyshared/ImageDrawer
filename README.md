# ImageDrawer

This plug-in draws in the image by using various animations.
It is assumed to build it in the slide show and the image gallery, etc. and is developed.

ImageDrawer Project
[http://github.com/holyshared/ImageDrawer](http://github.com/holyshared/ImageDrawer)

![Screenshot](http://holyshared.github.com/ImageDrawer/screenshot.png)

Please see the following about use.

## ImageDrawer.Grid

### How to use

#### Step.1 HTML

First of all, the canvas element is described.
The content is as follows.

	#HTML
	<canvas id="myCanvas"></canvas>

#### Step.2 Javascript

The following describe javascript. 
The canvas is specified with setCanvas().
And, the image where it draws with setImage() is specified. 

Please use the read image.

	#JS
	var myImage = new Image();
	myImage.src = "images/draw-image.jpg";
	myImage.onload  = function() {

		var myCanvas = document.id("myCanvas");
		var drawer = new ImageDrawer.Grid({
			'height': 55, 
			'width': 65,
			'transition': 'expo:in:out',
			'onDrawStart': function() {
				//image drawing start
				log.set("html", "Start");
			},
			'onDrawComplete': function() {
				//image drawing complete
				log.set("html", "Complete");
			}
		});
		drawer.setCanvas(myCanvas)
		drawer.setImage(myImage);

		//drawing a image
		drawer.drawLeft();
	}

or 

	#JS
	var myImage = new Image();
	myImage.src = "images/draw-image.jpg";
	myImage.onload  = function() {

		var myCanvas = document.id("myCanvas");
		var drawer = new ImageDrawer.Grid({
			'canvas': myCanvas, 
			'source': myImage, 
			'height': 55, 
			'width': 65,
			'transition': 'expo:in:out',
			'onDrawStart': function() {
				//image drawing start
				log.set("html", "Start");
			},
			'onDrawComplete': function() {
				//image drawing complete
				log.set("html", "Complete");
			}
		});
		//drawing a image
		drawer.drawLeft();
	}


### Options

All options have default values assigned, hence are optional.

* **canvas**: (element) Canvas element where it draws.
* **source**: (element/string) Image where it draws.
* **height**: (int) Height of divided panel.
* **width**: (int) Width of divided panel.
* **interval**: (int) Interval when image is switched.
* **duration**: (int) duration of animation.


## ImageDrawer.Collapses

### How to use

#### Step.1 HTML

First of all, the canvas element is described.
The content is as follows.

	#HTML
	<canvas id="myCanvas"></canvas>

#### Step.2 Javascript

The following describe javascript. 
The canvas is specified with setCanvas().
And, the image where it draws with setImage() is specified. 

Please use the read image.

	#JS
	var myImage = new Image();
	myImage.src = "images/draw-image.jpg";
	myImage.onload  = function() {

		var myCanvas = document.id("myCanvas");
		var drawer = new ImageDrawer.Collapses({
			'width': 65,
			'transition': 'expo:in:out',
			'onDrawStart': function() {
				//image drawing start
				log.set("html", "Start");
			},
			'onDrawComplete': function() {
				//image drawing complete
				log.set("html", "Complete");
			}
		});
		drawer.setCanvas(myCanvas)
		drawer.setImage(myImage);

		//drawing a image
		drawer.drawLeft();
	}

or 

	#JS
	var myImage = new Image();
	myImage.src = "images/draw-image.jpg";
	myImage.onload  = function() {

		var myCanvas = document.id("myCanvas");
		var drawer = new ImageDrawer.Collapses({
			'canvas': myCanvas, 
			'source': myImage, 
			'width': 65,
			'transition': 'expo:in:out',
			'onDrawStart': function() {
				//image drawing start
				log.set("html", "Start");
			},
			'onDrawComplete': function() {
				//image drawing complete
				log.set("html", "Complete");
			}
		});
		//drawing a image
		drawer.drawLeft();
	}


### Options

All options have default values assigned, hence are optional.

* **canvas**: (element) Canvas element where it draws.
* **source**: (element/string) Image where it draws.
* **width**: (int) Width of divided panel.
* **interval**: (int) Interval when image is switched.
* **duration**: (int) duration of animation.


## License

The MIT License
[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php "The MIT License")
