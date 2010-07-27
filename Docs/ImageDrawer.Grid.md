Class: ImageDrawer.Grid {#ImageDrawer.Grid}
===========================================

### Extends:
ImageDrawer

## ImageDrawer.Grid Method: constructor {#ImageDrawer.Grid:constructor}

### Syntax:
var myImageDrawer = new ImageDrawer.Grid(options);

### Arguments:
1. options - (mixed)  Option when plugin is used.

### Options:
* **canvas**: (element) Canvas element where it draws.
* **source**: (element/string) Image where it draws.
* **gridHeight**: (int) Height of divided panel.
* **gridWidth**: (int) Width of divided panel.
* **interval**: (int) Interval when image is switched.
* **transition**: (string) Transition of animation. Default is expo:in:out.
* **duration**: (int) duration of animation.
* **onDrawStart**: When drawing begins, this event is generated.
* **onDrawComplete**: When drawing is completed, this event is generated.



## ImageDrawer.Grid Method: setCanvas {#ImageDrawer.Grid:setCanvas}

### Syntax:
var myCanvas = new Element("canvas");
myImageDrawer.setCanvas(myCanvas);

### Arguments:
1. canvas - (element) Canvas element that draws in image.

### Returns:
(object) This ImageDrawer.Grid instance.



## ImageDrawer.Grid Method: getCanvas {#ImageDrawer.Grid:getCanvas}

### Syntax:
myImageDrawer.getCanvas();

### Returns:
(element) Canvas element that draws in image.



## ImageDrawer.Grid Method: setImage {#ImageDrawer.Grid:setImage}

### Syntax:
myImageDrawer.setImage("draw-image.jpg");

or

var myImage = new Image();
myImage.src = "draw-image.jpg";
myImageDrawer.setImage(myImage);



### Arguments:
1. image - (element/string)  URL or img element of image where it draws

### Returns:
(object) This ImageDrawer.Grid instance.



## ImageDrawer.Grid Method: getImage {#ImageDrawer.Grid:getImage}

### Syntax:
myImageDrawer.getImage();

### Returns:
(element) Img element where it draws.



## ImageDrawer.Grid Method: isDrawing {#ImageDrawer.Grid:isDrawing}

### Syntax:
myImageDrawer.isDrawing();

### Returns:
(boolean) True is returned while drawing and, besides, false is returned.



## ImageDrawer.Grid Method: pause {#ImageDrawer.Grid:pause}

### Syntax:
myImageDrawer.pause();



## ImageDrawer.Grid Method: cancel {#ImageDrawer.Grid:cancel}

### Syntax:
myImageDrawer.cancel();



## ImageDrawer.Grid Method: drawLeft {#ImageDrawer.Grid:drawLeft}

### Syntax:
myImageDrawer.drawLeft();



## ImageDrawer.Grid Method: drawRight {#ImageDrawer.Grid:drawRight}

### Syntax:
myImageDrawer.drawRight();



## ImageDrawer.Grid Method: drawTop {#ImageDrawer.Grid:drawTop}

### Syntax:
myImageDrawer.drawTop();



## ImageDrawer.Grid Method: drawBottom {#ImageDrawer.Grid:drawBottom}

### Syntax:
myImageDrawer.drawBottom();