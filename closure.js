var name = 'The window';
var object = {
	name       :  'My Object',
	getNameFunc:   function(){
		return function(){
			return this.name;
		};
	}
};

console.log(object.getNameFunc());
var closure = object.getNameFunc();

console.log(closure());

var a = function(){
	var i = 0; 
	return function(){
		console.log(++i);
	}
}

var c = a();
c();
c();
c();

var yourName = "王菲";
myName = "leadzen";

console.log(myName + ' like ' + yourName);

ChangeNames();

function ChangeNames(){
	console.log("your name is: " + yourName);
	console.log('my old name is: ' + myName);
	var yourName = "jingwen";
	myName = "lizhan";
	console.log(myName + ' like ' + yourName);
}

console.log(myName + ' like ' + yourName);

