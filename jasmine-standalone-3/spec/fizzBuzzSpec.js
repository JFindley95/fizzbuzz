describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });

    it('fizzes for 6', function() {
      expect(fizzbuzz.play(6)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });

    it('buzzes for 10', function() {
      expect(fizzbuzz.play(10)).toEqual('Buzz');
    });
  });
  describe('multiples of 3 and 5', function() {
    it('will FizzBuzz for 15', function() {
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    });
    it('will FizzBuzz for 30', function() {
      expect(fizzbuzz.play(30)).toEqual('FizzBuzz');
    });
  });

  describe('all other numbers', function() {
    it('will return a normal number', function() {
      expect(fizzbuzz.play(1)).toEqual(1);
    });
    it('will return a normal number', function() {
      expect(fizzbuzz.play(13)).toEqual(13);
    });
  });
});
