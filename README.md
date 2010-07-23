# ImageDrawer

API that draws to the canvas in the image is offered.

![Screenshot](http://holyshared.github.com/ImageDrawer/screenshot.png)

It tells it in the beginning.
Please note that the explanation of this plug-in usage might be a strange content because I am not confident of English though it apologizes very much.

## ImageDrawer.Grid

### How to use


#### Step.1 HTML

	#HTML
	<canvas id="myCanvas"></canvas>

#### Step.2 Javascript

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







## ImageDrawer.Slice

### How to use

### Options

All options have default values assigned, hence are optional.





* **panelHeight**: (int) Height of divided panel.
* **panelWidth**: (int) Width of divided panel.
* **interval**:
* **duration**:
* **zIndex**: (int) starting position of layer.
* **onStart**: When the slide show is begun, it is generated.
* **onPreload**: When reading all images is completed, it is generated.
* **onProgress**: When reading the image is completed, it is generated.
* **onChange**: when the image changes, it is generated.
