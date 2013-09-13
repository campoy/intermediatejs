var obj = { balloons: 99 };

function aFunc(kind) {
	console.log(this.balloons + ' ' + kind)
}

function bind(obj, f) {
	return function() {
		f.apply(obj, arguments)
	}
}

var boundFunc = bind(obj, aFunc);
boundFunc('luft balloons');
