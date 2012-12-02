var myObejct = (function () {
	var value = 0;
	return {
		increment: function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function () {
			return value;
		}
	}
}());

console.log(myObejct);
myObejct.increment(1);
console.log(myObejct.getValue());