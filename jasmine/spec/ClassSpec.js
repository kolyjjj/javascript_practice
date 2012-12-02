describe('Class', function(){

	//how to judge an object is inherited from another object
	// it('should inherit an object', function(){
	// 	var father = {};
	// 	var child = inherit(father);

	// 	expect().toBeTruthy();
	// });

	it('should create a range class', function(){
		var r = range(1,3);

		expect(r.include(2)).toBeTruthy();
	});

	it('should print the range using brackets', function(){
		var r = range(1,3);
		
		expect(r.toString()).toBe('1,2,3');
	});

	describe('should create an instance of the Range function', function(){

		it ('should return 1,2,3,4,5', function(){
			var r = new Range(1,5);

			expect(r.toString()).toBe("1,2,3,4,5");
		});

		it('should return 1,2,3', function(){
			var r = new Range(1,3);

			expect(r.toString()).toBe('1,2,3');
		})
	});
});