Class: ImageDrawer.Expand {#ImageDrawer.Expand}
===============================================

### Extends:
ImageDrawer

## ImageDrawer.Expand Method: constructor {#ImageDrawer.Expand:constructor}

### Syntax:
var myImageDrawer = new ImageDrawer.Expand(options);

### Arguments:
1. options - (mixed)  Option when plugin is used.

### Options:
* **canvas**: (element) Canvas element where it draws.
* **source**: (element/string) Image where it draws.
* **slideWidth**: (int) Width of slide.
* **transition**: (string) Transition of animation. Default is expo:in.
* **interval**: (int) Interval when image is switched.
* **duration**: (int) duration of animation.
* **onDrawStart**: When drawing begins, this event is generated.
* **onDrawComplete**: When drawing is completed, this event is generated.


## ImageDrawer.Expand Method: setCanvas {#ImageDrawer.Expand:setCanvas}

### Syntax:
var myCanvas = new Element("canvas");
myImageDrawer.setCanvas(myCanvas);

### Arguments:
1. canvas - (element) Canvas element that draws in image.

### Returns:
(object) This ImageDrawer.Expand instance.



## ImageDrawer.Expand Method: getCanvas {#ImageDrawer.Expand:getCanvas}

### Syntax:
myImageDrawer.getCanvas();

### Returns:
(element) Canvas element that draws in image.



## ImageDrawer.Expand Method: setImage {#ImageDrawer.Expand:setImage}

### Syntax:
myImageDrawer.setImage("draw-image.jpg");

or

var myImage = new Image();
myImage.src = "draw-image.jpg";
myImageDrawer.setImage(myImage);



### Arguments:
1. image - (element/string)  URL or img element of image where it draws

### Returns:
(object) This ImageDrawer.Expand instance.



## ImageDrawer.Expand Method: getImage {#ImageDrawer.Expand:getImage}

### Syntax:
myImageDrawer.getImage();

### Returns:
(element) Img element where it draws.



## ImageDrawer.Expand Method: isDrawing {#ImageDrawer.Expand:isDrawing}

### Syntax:
myImageDrawer.isDrawing();

### Returns:
(boolean) True is returned while drawing and, besides, false is returned.



## ImageDrawer.Expand Method: pause {#ImageDrawer.Expand:pause}

### Syntax:
myImageDrawer.pause();



## ImageDrawer.Expand Method: cancel {#ImageDrawer.Expand:cancel}

### Syntax:
myImageDrawer.cancel();



## ImageDrawer.Expand Method: drawLeft {#ImageDrawer.Expand:drawLeft}

### Syntax:
myImageDrawer.drawLeft();



## ImageDrawer.Expand Method: drawRight {#ImageDrawer.Expand:drawRight}

### Syntax:
myImageDrawer.drawRight();



## ImageDrawer.Expand Method: drawTop {#ImageDrawer.Expand:drawTop}

### Syntax:
myImageDrawer.drawTop();



## ImageDrawer.Expand Method: drawBottom {#ImageDrawer.Expand:drawBottom}

### Syntax:
myImageDrawer.drawBottom();