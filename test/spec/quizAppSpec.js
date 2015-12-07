describe('quizApp', function () {
	describe('QuizUser', function () {
		it('should exist', function () {
			expect(QuizUser).toBeDefined();
		})
		it('should be a function', function () {
			expect(QuizUser).toEqual(jasmine.any(Function));
		})
		it('should return an object when called with new', function () {
			var quizUser = new QuizUser('Tester', 'test', 'test', 0);
			expect(quizUser).toEqual(jasmine.any(Object));
		})
		describe('return object', function () {
			it('should have name, email, password, and totalScore properties', function () {
				var quizUser = new QuizUser('Tester', 'test', 'test', 0);
				expect(quizUser.hasOwnProperty('name')).toBe(true);
				expect(quizUser.hasOwnProperty('email')).toBe(true);
				expect(quizUser.hasOwnProperty('password')).toBe(true);
				expect(quizUser.hasOwnProperty('totalScore')).toBe(true);
			})
		})
	})
	describe('Question', function () {
		it('should exist', function () {
			expect(Question).toBeDefined();
		})
		it('should be a function', function () {
			expect(Question).toEqual(jasmine.any(Function));
		})
		it('should return an object when called with new', function () {
			var question = new Question('Tester', 'test', 'test', 0);
			expect(question).toEqual(jasmine.any(Object));
		})
		describe('return object', function () {
			it('should have title, answersArray, rightAnswer, and difficulty properties', function () {
				var question = new Question('Tester', 'test', 'test', 0);
				expect(question.hasOwnProperty('title')).toBe(true);
				expect(question.hasOwnProperty('answersArray')).toBe(true);
				expect(question.hasOwnProperty('rightAnswer')).toBe(true);
				expect(question.hasOwnProperty('difficulty')).toBe(true);
			})
		})
	})
	describe('quizUsers', function () {
		it('should exist', function () {
			expect(quizUsers).toBeDefined();
		})
		it('should be an array', function () {
			expect(quizUsers).toEqual(jasmine.any(Array));
		})
		it('should have three items', function () {
			expect(quizUsers.length).toBe(3);
		})
		it('(when complete) should only contain instances of QuizUser', function () {
			var areAllUsers = true;
			var quizUsers = quizUsers || [];
			for (var i = 0; i < quizUsers.length; i++) {
				if (!users[i] instanceof QuizUser) {
					areAllUsers = false;
				}
			}
			expect(areAllUsers).toBe(true);
		})
	})
	describe('questions', function () {
		it('should exist', function () {
			expect(questions).toBeDefined();
		})
		it('should be an array', function () {
			expect(questions).toEqual(jasmine.any(Array));
		})
		it('should have three items', function () {
			expect(questions.length).toBe(3);
		})
		it('(when complete) should only contain instances of Question', function () {
			var areAllQuestions = true;
			var questions = questions || [];
			for (var i = 0; i < questions.length; i++) {
				if (!questions[i] instanceof Question) {
					areAllQuestions = false;
				}
			}
			expect(areAllQuestions).toBe(true);
		})
	})
})