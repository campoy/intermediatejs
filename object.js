function Animal(name) {
	this.name = name;
}

Animal.prototype.getName = function () {
	return this.name
}

function Dog() {
	Animal.apply(this, arguments)
}
Dog.prototype = new Animal();
Dog.prototype.speak = function () { return 'woof' };

function Cat(name) {
	Animal.call(this, name)
}
Cat.prototype = new Animal()
Cat.prototype.speak = function () { return 'meow' }

var weird = new Animal('weird')
var fido = new Dog('fido')
var felix = new Cat('felix')

console.log(weird.getName())
console.log(fido.getName() + ': ' + fido.speak())
console.log(felix.getName() + ': ' + felix.speak())

a = [fido, felix, weird]
t = [Dog, Cat, Animal]

for (var i = 0; i < a.length; i++) {
	it = a[i]
	console.log('\n' + it.getName() + ' (' + it.name + ')'+ '\n--------')
	for (var j = 0; j < t.length; j++) {
		console.log('is it a ' + t[j].name + '? ' + (it instanceof t[j]))
	}
}
