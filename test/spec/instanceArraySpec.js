describe('instanceArray', function () {
	describe('users', function () {
		it('should exist', function () {
			expect(users).toBeDefined();
		})
		it('should be an array', function () {
			expect(users).toEqual(jasmine.any(Array));
		})
		it('should have 4 items', function () {
			expect(users.length).toBe(4);
		})
		it('should contain all instances of User', function () {
			var areAllUsers = true;
			for (var i = 0; i < users.length; i++) {
				if (!users[i] instanceof User) {
					areAllUsers = false;
				}
			}
			expect(areAllUsers).toBe(true);

		})
	})
})