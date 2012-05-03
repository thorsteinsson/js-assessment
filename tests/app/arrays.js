define([ 'use!underscore' ], function(_) {
  describe("arrays", function() {
    var a, fn;

    beforeEach(function() {
      a = [ 1, 2, 3, 4 ];
      fn = function() { };
    });

    it("you should be able to determine the location of an item in an array", function() {
      // define a function for fn so that the following will pass
      fn = function(arr, item) {
        return _.indexOf(arr, item);
      };
      expect(fn(a, 3)).to.be(2);
    });

    it("you should be able to add the values of an array", function() {
      // define a function for fn so that the following will pass
      fn = function(arr) {
        return _.reduce(arr, function(memo, num) {
          return memo + num;
        });
      };
      expect(fn(a)).to.be(10);
    });

    it("you should be able to remove an item from an array", function() {
      // define a function for fn so that the following will pass
      fn = function(arr, item) {
        arr.splice(_.indexOf(arr, item), 1);
        return arr;
      };

      var result = fn(a, 2);
      expect(result).to.have.length(3);
      expect(result.join(' ')).to.be('1 3 4');
    });

    it("you should be able to add an item to the end of an array", function() {
      // define a function for fn so that the following will pass
      fn = function(arr, item) {
        arr.push(item);
        return arr;
      };

      var result = fn(a, 10);
      expect(result).to.have.length(5);
      expect(result[result.length - 1]).to.be(10);
    });

    it("you should be able to remove the last item of an array", function() {
      fn = function(arr, item) {
        arr.pop();
        return arr;
      };
      var result = fn(a);
      expect(result).to.have.length(3);
      expect(result.join(' ')).to.be('1 2 3');
    });

    it("you should be able to join together two arrays", function() {
      // define a function for fn so that the following will pass
      fn = function(arr1, arr2) {
        return arr1.concat(arr2);
      };

      var c = [ 'a', 'b', 'c', 1 ],
          result = fn(a, c);

      expect(result).to.have.length(8);
      expect(result.join(' ')).to.be('1 2 3 4 a b c 1');
    });

    it("you should be able to add an item anywhere in an array", function() {
      // define a function for fn so that the following will pass
      fn = function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
      };

      var result = fn(a, 'z', 2);

      expect(result).to.have.length(5);
      expect(result.join(' ')).to.be('1 2 z 3 4');
    });

    it("you should be able to count the occurences of an item in an array", function() {
      // define a function for fn so that the following will pass
      fn = function(arr, item) {
        return _.reduce(arr, function(memo, num) {
          return memo + (num === item ? 1 : 0);
        })
      };

      var result = fn([ 1, 1, 1, 2, 1, 3 ], 1);

      expect(result).to.be(4);
    });

    it("you should be able to find duplicates in an array", function() {
      // define a function for fn so that the following will pass
      fn = function(arr) {
        var found = [],
          prev,
          lastFound;

        _.each(arr.sort(), function(num) {
          if (prev === num && num !== lastFound) {
            lastFound = num;
            found.push(num);
          }
          prev = num;
        });

        return found;
      };

      var result = fn([ 1, 2, 4, 4, 3, 3, 1, 5 ]);

      expect(result).to.have.length(3);
      expect(result.sort().join(' ')).to.be('1 3 4');
    });

    it("you should be able to square each number in an array", function() {
      // define a function for fn so that the following will pass
      fn = function(arr) {
        return _.map(arr, function(num) {
          return num * num;
        });
      };

      var result = fn(a);

      expect(result).to.have.length(4);
      expect(result.join(' ')).to.be('1 4 9 16');
    });
  });
});
