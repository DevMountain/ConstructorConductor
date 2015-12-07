describe('sayName', function () {
	describe('Person', function () {
		it('should exist', function () {
			expect(Person).toBeDefined();
		})
		it('should be a function', function () {
			expect(Person).toEqual(jasmine.any(Function));
		})
		it('should return an object with name and age properties when invoked with new (e.g. var person = new Person(...))', function () {
			var person = new Person('Tester', 25)
			expect(person.hasOwnProperty('name')).toBe(true);
			expect(person.hasOwnProperty('age')).toBe(true);
		})
		describe('return object', function () {
			it('should be an instance of Person', function () {
				var person = new Person('Tester', 25);
				var isPerson = person instanceof Person;
				expect(isPerson).toBe(true);
			})
			it('should have access to a sayName method', function () {
				var person = new Person('Tester', 25);
				expect(person.sayName).toBeDefined();
				expect(person.sayName).toEqual(jasmine.any(Function));
			})
			describe('sayName', function () {
				it('should alert the name of the person on which sayName is invoked', function () {
					var tester = new Person('Tester', 25);
					var someoneElse = new Person('Simone Elsa', 22);
					var alert = spyOn(window, 'alert');
					tester.sayName();
					expect(alert).toHaveBeenCalledWith('Tester');
					someoneElse.sayName();
					expect(alert).toHaveBeenCalledWith('Simone Elsa');
				})
			})
		})
	})
})