// create an array of functions where the function at position i, prints the value i.

var a = [];

/* This doesn't work ... of course
for (var i = 0; i < 10; i++) {
	a[i] = function() { console.log(i); }
}
*/

// Pretty similar to the Go solution.
for (var i = 0; i < 10; i++) {
	a[i] = function(v) {
			return function() { console.log(v) }
	}(i);
}

for (var j = 0; j < 10; j++) {
	a[j]();
}
