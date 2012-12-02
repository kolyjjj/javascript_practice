if (typeof Object.create !== 'function') {
		Object.create = function(o){
			var F = function() {};
			F.prototype = o;
			return new F();
		};

	};
var hello_world = function(name){
	console.log("hello, " + (name || "world"));
}

var stooge = {};
var another_stooge = Object.create(stooge);
stooge.hello = 'Hello, world';
console.log(stooge.hello);
hello_world;
hello_world("koly");

var people = {
	first_name: 'koly',
	last_name: "li",
	address: "high-tech zone in ChengDu",
	gender: "male"
};
console.log(people);
people = function(first_name, last_name, address, gender){
	this.first_name = first_name,
	this.last_name =  last_name,
	this.address = address,
	this.gender = gender
};
var jack = new people("Jack", "Chen", "HongKong", "male");
console.log(jack);

//Can we assign parameters to the object properties
// People = function(name1, name2, address1, gender1){
// 	first_name: name1,
// 	last_name: name2,
// 	address: address1,
// 	gender: gender1
// }

//Exception
var exception_method = function(yes){
	if (yes === "exception"){
		throw {
			name: "test exception",
			message: "This is a test exception!"
		};
	}else{
		console.log("No exception");
	}
}

var try_exception = function(){
	try {
		exception_method("exception");
	}
	// catch(my_exception){
	// 	console.log("This is my exception");
	// }
	catch(e){
		console.log(e.name + ":" + e.message);
	}
}

console.log("Hi, this is " + jack.first_name);
delete jack.first_name;
console.log(jack);

delete people.first_name;
var deleted_person = new people( "deleted", "wo", "ha");
console.log(deleted_person);
console.log(typeof people);

delete people;
console.log(typeof people);

var sum = function(a,b){return a + b;};
var add = sum;
delete sum;
console.log(typeof sum);



exception_method;
exception_method("exception");
try_exception;


