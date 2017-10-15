function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
describe("Injector", function() {
  var Injector = require('../../lib/Injector');
  var injector;

  beforeEach(function() {
    injector = new Injector();
    
  });

  it("the injector it's running ok", function() {
    var speed=100;
    injector.initialize(0);
    expect(injector).toBeRunning(speed);
  });
  it("the injector it's damaged", function() {
    var speed=100;
    var damage=getRandomInt(1,100);
    injector.initialize(20);
    expect(injector).toBeDamaged();
  });
});
