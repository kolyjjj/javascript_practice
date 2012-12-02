//this is the factory
function inherit(p){
	if (p === null) 
		throw TypeError();
	// if (Obejct.create)
	// 	return Obejct.create(p);
	var t = typeof p;
	if (t !== 'object'  && t !== 'function')
		throw TypeError();

	function f(){};
	f.prototype = p;
	return new f;     //return an object, if 'return f', you're returning a function, but when we say inherit, we're saying an object inherit from another object
}

function range(from, to){
	var r = inherit(range.methods);
	r.from = from;
	r.to = to;
	return r;
}

range.methods = {
	include   : function(x){
		return  (x > this.from && x < this.to);
	},
	toString  :   function(){
		var result = '';
		for (var i = Math.ceil(this.from); i <= this.to; i++) {
			result += i + ',';
		}
		return result.slice(0, this.to+2);
	}
};


//this is the usual way to create the constructor
function Range(from, to){
	this.from = from;
	this.to = to;
}

Range.prototype = {
	include	: 	function(x){
		return (x > this.from && x < this.to);
	},
	toString 	: 	function(){
		var result = '';
		for (var i = Math.ceil(this.from); i <= this.to; i++){
			result += i + ',';
		}
		return result.slice(0, result.length-1);
	}
}
