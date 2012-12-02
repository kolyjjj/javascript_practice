var outer = function(){
	var myName = 'koly';
	yourName = 'nic';

	console.log(myName + ' like ' + yourName);

	var inner = function(){
		console.log(myName + ' like ' + yourName);
		var myName;
		myName = 'bbjjk';
		yourName = 'wangfei';
		console.log(myName + ' like ' + yourName);
		var hello = 'Do you know? ';
		console.log(hello + myName + ' like ' + yourName);
		return function(){
			return hello;
		};
	};
	var hello = inner()();

	console.log(myName + ' like ' + yourName);
	console.log(hello + myName + ' like ' + yourName);

}

outer();


var deep_thought = {
	the_answer    : 42,
	ask_question  : function(){
		return this.the_answer;
	}
}

console.log(deep_thought.ask_question());
console.log(deep_thought.the_answer);
console.log('-------------deep_thought_1--------------');

// var deep_thought_2 = function(){
function deep_thought_2(){
	var the_answer = 33;
	return function(){
		return the_answer;
	}
}
console.log('cannot access the attribute : ' + deep_thought_2.the_answer);
console.log('the deep_thought_1 is: ' + deep_thought_2()());

function deep_thought_1() {
	var the_answer = 42;
	var getTheAnswer = function (){
		return this.the_answer;
	}
	return getTheAnswer;
}

// console.log(deep_thought_1.ask_question());
console.log("the return of the getTheAnswer is: " + deep_thought_1()());


console.log(deep_thought_1.the_answer);
console.log(new deep_thought_1().the_answer);
console.log(deep_thought_1());
console.log(deep_thought_1());

var inner_return_this = function(){
	var inner_val = 22;

	inner_function = function(){
		return this;
	};

	return function(){
		return inner_val;
	};

};

console.log(inner_return_this()());
console.log(inner_return_this.inner_function);














