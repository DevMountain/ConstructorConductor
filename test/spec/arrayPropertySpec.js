describe('arrayProperty', function () {
	describe('String', function () {
		it('should have a reverse method', function () {
			var str = 'Hello'
			expect(str.reverse).toBeDefined();
			expect(str.reverse).toEqual(jasmine.any(Function));
		})
		describe('reverse method', function () {
			it('should reverse the string', function () {
				var str = 'Hello';
				expect(str.reverse()).toEqual('olleH');
			})
		})
	})
})