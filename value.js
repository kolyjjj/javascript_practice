// console.log(Math.pow(2, 53));
// console.log(0/0);
// console.log(100/0);
// console.log(-100/0);

var outputArray = [Math.pow(2,53), 0/0, 100/0, -100/0];

var outputObejct = {
	// math_pow      : Math.pow(2,90),
	// zero_division : 0/0,
	// positive_infinity : 100/0,
	// negative_infinity: -100/0
	'Math.pow(2,90)'           : Math.pow(2,90),
	'0/0'                      : 0/0,
	'100/0'					   : 100/0,
	'-100/0'                   : -100/0,
	'0 === -0'                 : 0 === -0,
	'1/0 === -1/0'             : 1/0 === -1/0,
	'NaN === NaN'              : NaN === NaN,
	'time now'                 : new Date(),
	'multiple lines string'    : 'one \
two \
three',

	'regular expression'       : (function(){
		var text = 'testing: 1, 2, 3';
		var pattern = /\d+/g;
		var result;
		return pattern.test(text) + '****' + text.search(pattern) + '****' + text.match(pattern) + '****' + 
				text.replace(pattern, '#') + '****' + text.split(/\D+/);
	}()),

	'set property of string'   : (function(){
		var s = "hello";
		s.len = 4;
		var t = s.len;
		return t;
	}()),

	'Objects are not compared by value'   : (function(){
		var a = {x:1}, b = {x:1};
		var c = [], d = [];
		return '{x:1} === {x:1} -->' + (a === b).toString() + '***' + '[] === [] -->' + (c === d).toString();
	}()),

	'2 objects are the same if and only if they refer to the same underlying object' : (function(){
		var a = [];
		var b = a;
		return a === b;
	})(),

	'How to compare two objects??? When use === be sure to compare two primitive types' : (function(){
		return 'Need some code to demostrate!!!!!!!!!!'
	})(),

	'the amazing use of toString()'        : (function(){
		return '\narray tostring:  ' + [1,2,3].toString() + '\n' + 
		       'function tostring:   ' + (function(x){f(x);}).toString() + '\n' +
		       'regex tostring:   ' + /\d+/g.toString() + '\n' + 
		       'Date tostring:   ' +  (new Date()).toString() + '\n';
	}()),

	'variable defined in the function is local'   : (function(){
		var koly = 'This is outter koly';
		var innerFunction = function(){
			var koly = 'inner';
			outter = 'outter';  //this is global variable
		};
		innerFunction();     //without this line, you'll get an error, why???????
		return 'Inner is: ' + koly + '\n' + "Outter is:  " + outter + '\n' + 
		       'The innerFunction.koly is:  ' + innerFunction.koly + '\n' +
		       'The innerFunction.outter is:  ' + innerFunction.outter + '\n' +
		       'The thisVariable in innerFucntion is:  ' + innerFunction.thisVariable;
	}()),

	'The in operator'   : (function(){
		var point = {x:1, y:2};
		var data = [7,8,9];
		var pointResult = 'x' in point;
		var numberInData = 1 in data;
		var zInPoint = 'z' in point;
		var tenInData = 10 in data;
		return 'x is in object {x:1, y:2} : ' + pointResult + '\n' +
		       '7 is  in  array [7,8,9]' + numberInData + '\n' +
		       'z is in object {x:1, y:2}' + zInPoint + '\n' +
		       '10 is in array [7,8,9]' + tenInData;
	}()),

	//this line is without the bracket
	'The only situation in which the comma is commonly used is'  : function(){
		var result = 0;
		for (var i = 0, j = 10; i < j; i++, j--){
			result += i + j;
		}
		return result;
	}(),

	'we are using strict mode'   : (function(){
		return this === undefined;
	}()),

	'throw an exception and catch it'     : (function(){
		var x = 0;
		var result = '';
		try{
			if (x === 0){
				throw new Error('x equals 0');
			}
		}catch (e){
			return result += "the Error exception is catched!\n";
		}finally{
			return result += "This is the finally clause!";
		}
	}()),

	'the date prototype'           : (function(){
		var date = new Date();
		// return date.prototype + date.prototype.toString() + date.prototype.prototype.toString();
	}()),

	'the prototype chain'          : (function(){
		var object = {x:'x'};
		var sun = Object.create(object);
		sun.y = 'y';
		var grandSun = Object.create(sun);
		grandSun.z = 'z';
		return grandSun.z + grandSun.x + grandSun.y;
	}()),

	'What if book or book.subtitle is undefined'   : (function(){
		var book = {};
		book.subtitle = 'hello world!';
		return 'book && book.subtitle && book.subtitle.length' + book && book.subtitle && book.subtitle.length;
	}()),

	'get property descriptor'    : (function(){
		return Object.getOwnPropertyDescriptor({x:1}, 'x');
	}()),

	'the constructor property'   : (function(){
		var test = {};
		return test.constructor.prototype;
	}()),

	'the array join() method'   : (function(){
		var a = [1,2,3];
		return 	'original array: [1,2,3]' +
				'\nno separetor:  '  + a.join()  +
				'\nspace as the seperator: '  + a.join(' ') + 
				'\nnothing as the seperator: ' + a.join('') +
				'\nstar as the seperator: ' + a.join('*');
	}()),

	'object context for this(which returns undefined because the add function is not called)'  : (function(){
		var object = {
			operand1  : 1,
			operand2  : 2,
			add : function(){
				this.result = this.operand1 + this.operand2;
			}
		};
		return object.result;
	}()),

	'object context for this (which will work because this time we call the add method'  : (function(){
		var object = {
			operand1  : 1,
			operand2  : 2,
			add  : function(){
				this.result = this.operand1 + this.operand2;
			}
		};
		object.add();
		return object.result;

	}()),

	'use bracket to invoke the object method'  : (function(){
		var object = {
			operand1  : 1,
			operand2  : 2,
			add : function(){
				this.result = this.operand1 + this.operand2;
			}
		};
		object['add']();
		return object.result;
	}()),

	'this of the nested function'   : (function(){
		var result = '';
		var o = {
			m : function(){
				var _self = this;
				result = (this === o).toString();
				var method = function(){
					result += '  ' + (this === o).toString();  //'false', this is global or undefined
					result += '  ' + (_self === o).toString(); //'true', self is the outer this value
				};
				method();
			}
		};
		o.m();
		return result;
	}()),

	'constructor invocation with a return object'  : (function(){
		function People(){
			var first = 'koly';
			var last = 'li';
			return {first: 'koly', last:'li', toString : function(){return first + last}};
		}

		var me = new People;
		return me.toString();
	}()),

	'constructor invocation with a primitive value'  : (function(){
		function People() {
			var first = 'koly';
			var last = 'li';
			return 1;
		}
		var me = new People;
		return me.toString();  //this will return [object object]
	}()),

	'use this in constructor function'  : (function(){
		function People(){
			this.first = 'koly';
			this.last = 'li';
			this.myName = function(){
				return 'my name is: ' + this.first + ' ' + this.last;
			}
		}
		var me = new People;
		return me.first + me.last + '\n' + me.myName();
	}()),

	'return the biggest number, you can input endless numbers'  : (function(){
		var max = function(){
			var max = Number.NEGATIVE_INFINITY;
			for (var i = 0; i < arguments.length; i++){
				if (arguments[i] > max)
					max = arguments[i];
			}
			return max;
		}(1,2,3,1000,-1000,20000000,90000,4,5,6,7,8,8,2,3,4,5);
		return max;
	}()),

	'use function as value'  :  (function(){
		var operators = {
			add      : function(x,y){return x + y;},
			subtract : function(x,y){return x - y},
			multiply : function(x,y){return x * y},
			divide   : function(x,y){return x / y},
			pow      : Math.pow
		};

		function operate2(operator, operand1, operand2){
			if (typeof operators[operator] === 'function'){
				return operators[operator](operand1, operand2);
			}
			throw 'unknown operator';
		}

		return '1 add 2 is : ' +  operate2('add', 1, 2) +
			   '3 subtract 1 is: ' + operate2('subtract', 3, 1);
	}()),

	'the property of a function'  : (function(){
		People.age = 0;
		function People(){
			return ++People.age;
		}
		People();
		People();
		return People();
	}()),

	'see the difference between this and the previous one'  :  (function(){
		People.age = 0;
		function People(){
			return People.age++;
		}
		People();
		People();
		return People();
	}()),

	'lexical scoping: functions are executed using the variable scope that was in effect when they were defined, not the variable scope that \
	is in effect when they are invoked'  :  (function(){
		var scope = 'global scope';
		function checkScope(){
			var scope = 'local scope';
			return function(){return scope};
		}
		return checkScope()(); // where is the scope defined, and where is the scope invoked?? Think about it!
	}()),

	'the scope is the global scope'  : (function(){
		var scope = 'global scope';
		function checkScope(){
			var scope = 'local scope';
			return function(){return scope};
		}
		return scope;
	}()),

	'change the global scope'   :  (function(){
		var scope = 'global scope';
		function checkScope(){
			var scope = 'local scope';
			return function(){return scope};
		}
		return scope = checkScope()();
	}()),

	"just return the value, what's the difference?"  :  (function(){
		var scope = 'global scope';
		function checkScope(){
			var scope = 'local scope';
			return function(){return scope}();
		}
		return checkScope();
	}()),

	'Compared to the previous "the property of a function", use "private attributes"'  :  (function(){
		return (function(){
			var counter = 0;
			return function(){return ++counter;}
		}())();
	}()),

	'more readable version of the previous one'  :  (function(){
		var uniqueInteger = (function(){
			var counter = 0;
			return function(){return ++counter;};
		}());
		uniqueInteger();
		return uniqueInteger();
	}()),

	'the function return an object, which has a reset and a counter method'  :  (function(){
		function counter(){
			var n = 0;
			return {
				count : function(){return ++n},
				reset : function(){n = 0;}
			}
		}
		var c = counter(), d = counter();
		var result = '';
		result += c.count().toString() + '  ' + d.count().toString() + '  ' + d.count().toString() + '  ';
		c.reset();
		result += 'c.reset()  ' + c.count().toString();
		return result;
	}()),

	'the getter and setter of a function'  : (function(){
		function counter(n){
			return {
					get count() {return n++;},          //this way to write getter & setter is wired
					set count(m){
					if (m >= n) n = m;
					else throw Error('count can only be set to a larger number');
				}
			}
		}
		var c = counter(1000);
		return c.count;

	}()),

	'add private getter & setter method'  :  (function(){
		function addPrivateMethod(o, name, predicate){
			var value;
			o['get' + name] = function(){return value;};
			o['set' + name] = function(v){
				if (predicate && !predicate(v))
					throw  Error("set" + name + ": invalid value" + v);
				else
					value = v;
			};
		}

		var koly = {};
		addPrivateMethod(koly, 'Name', function(x){return typeof x === 'string';});
		koly.setName('koly li');
		return koly.getName();
	}()),

	'when you want to create many closures with a loop'  :  (function(){
		function constfunc(v){
			return function(){
				return v;
			};
		}

		var funcs = [];
		for (var i = 0; i < 10; i++){
			funcs[i] = constfunc(i);
		}
		var result = '';
		for (var j in funcs){
			result += j.toString() + ' ';
		}
		// for (var i = 0; i < funcs.length; i++){
		// 	result += funcs[i]() + ' ';
		// }
		return result;
	}()),

	'return an array of functions that return the values 0-9'  :  (function(){
		function constfunc(){
			var funcs = [];
			for (var i = 0; i < 10; i++){
				funcs[i] = function(){return i;};
			}
			return funcs;
		}
		var funcs = constfunc();
		return funcs[5]();
	}()),

	'this keyword in a function'  :  (function(){
		var result = '';
		function People(){
			this.firstName = 'koly';
			this.secondName = 'li';
		}
		result += 'People.firstName:  '  + People.firstName + '  ' + 'People.secondName:  ' + People.secondName;
		People();
		result += '\n After the call of People(), the result is:  \n';
		result += 'People.firstName:  '  + People.firstName + '  ' + 'People.secondName:  ' + People.secondName;
		var p = new People();
		result += '\n now use the new keyword to initilise an object\n';
		result += 'p.firstName:  ' + p.firstName  + 'p.secondName:  '  + p.secondName;
		return result;
	}()),

	'use function as an obejct'   :  (function(){
		function People(){
			var firstName = 'koly';
			var secondName = 'li';
		}
		People();
		return People.firstName + '  ' +  People.secondName;
	}()),

	'instanceof'   :  (function(){
		function Person(){
			this.firstName = 'koly';
			this.lastName = 'li';
		}

		var koly = new Person;
		return 'koly is instanceof Person   :  ' + (koly instanceof Person);
	}()),

	'the prototype of an object'  :  (function(){
		function People(){
			this.fullName = 'koly li';
			this.gender = 'male';
		}
		var p = new People;
		return 'People.prototype:  '  +  People.prototype  +  '   p.prototype:  ' + p.prototype;
	}()),

	'the constructor of the prototype'  :  (function(){
		var F = function(){};
		var p = F.prototype;
		return 'the prototype is:  ' + p + '  the constructor of the prototype is:  ' + p.constructor  +
			'\n the constructor point to the function F:  p.constructor === F? ' + (F === p.constructor) ;
	}()),

	'the object of a class do not have a constructor property'  :  (function(){
		function People(){
			this.fullName = 'koly li';
		}
		var p = new People;
		//var constructor = p.prototype.constructor;  //this should be undefined
		return '\nthe constructor of p is:  ' + p.constructor +
			'\nthe prototype of p is:  ' + p.prototype +
			'\nthe prototype of function People is:  ' + People.prototype +
			'\nthe constructor of function People is:  ' +  People.constructor;
		//	+ '\nthe p.prototype.constructor is: ' + constructor;
	}())


}

for (var hi in outputArray){
	console.log(outputArray[hi]);
}

console.log('hello this is the obejct iteration output');
var count = 0;
for (var you in outputObejct){
	count++;
	console.log(count + ',****' + you + '  : ' + outputObejct[you] + '\n');
}