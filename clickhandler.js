function ClickCounter() {
	this.numClicks = 0;
	this.getListener = function() {
		return function() {
			this.numClicks++;
		}.bind(this)
	}

	// getListener2 is not bound, therefore calling it would fail
	// its this has to be replaced using call or apply
	this.getListener2 = function() {
		return function() {
			this.numClicks++;
		}
	}


	this.getNumClicks = function() {
		return this.numClicks;
	}
}

var c1 = new ClickCounter();
var c1b1 = c1.getListener();
var c1b2 = c1.getListener();

var c1b3 = c1.getListener2();

c1b1()
c1b1()
c1b2()
c1b3.apply(c1)

console.log(c1.getNumClicks())

var c2 = new ClickCounter();
var c2b1 = c2.getListener();
var c2b2 = c2.getListener();

c2b1()
c2b2()
c2b1()

console.log(c2.getNumClicks())
