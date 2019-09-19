describe("add",  function(){
    var calculator;


    beforeEach(function() {
      calculator = new add();
    });

    it("should return zero when an empty string is passed", function(){
      expect(calculator.add('')).toEqual(0);
    });

    it("should return the number itself when a single number is passed", function(){
      expect(calculator.add('1')).toEqual(1);
    });

    it("should return the sum of the numbers if two numbers are given", function(){
      expect(calculator.add('1,2')).toEqual(3);
    });

    it("should return the sum of an unknown amount of numbers", function(){
      randomArray = (length, max) => [...new Array(length)]
      .map(() => Math.round(Math.random() * max));
      randy = Math.floor((Math.random() * 100) + 1);
      res = randomArray(randy,randy);
      sum = res.reduce((pv, cv) => pv+cv, 0);
      arg = res.join();
      expect(calculator.add(arg)).toEqual(sum);
       
    });

    it("should allow new lines in between the input number string", function(){
      expect(calculator.add("1\n2,3")).toEqual(6);
    });

    it("should throw an error for negative numbers", function(){
      expect( function(){ calculator.add("-1,2,3"); } ).toThrow(new Error("negatives not allowed"));
    });
  });