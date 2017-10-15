beforeEach(function () {
  jasmine.addMatchers({
    toBeRunning: function () {
      return {
        compare: function (actual, expected) {
          var injector = actual;

          return {
            pass: injector.capacity === expected && injector.running
          }
        }
      };
    },
    toBeDamaged: function () {
      return {
        compare: function (actual) {
          var injector = actual;

          return {
            pass: injector.capacity < 100 && injector.running === false
          }
        }
      };
    },
    toBeSpeedUp: function () {
      return {
        compare: function (actual,expected) {
          var reactor = actual;

          return {
            pass: reactor.speed===expected
          }
        }
      };
    }

  });
});
