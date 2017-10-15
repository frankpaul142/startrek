describe("Reactor", function() {
  var Injector = require('../../lib/Injector');
  var Reactor = require('../../lib/Reactor');
  var injector;
  var reactor;
  beforeEach(function() {
    injectorA = new Injector();
    injectorB = new Injector();
    injectorC = new Injector();
    reactor = new Reactor();
  });

  it("Speed Up Reactor Failed", function() {
    var speed=170;
    injectorA.initialize(20);
    injectorB.initialize(50);
    injectorC.initialize(40);
    reactor.initialize(speed,injectorA,injectorB,injectorC);
    reactor.SpeedUp();
    expect(reactor).toBeSpeedUp(speed);
  });
  it("Speed Up Reactor less 100% speed 0 damage injectors", function() {
    var speed=90;
    injectorA.initialize(0);
    injectorB.initialize(0);
    injectorC.initialize(0);
    reactor.initialize(speed,injectorA,injectorB,injectorC);
    reactor.SpeedUp();
    expect(reactor).toBeSpeedUp(speed);
  });
  it("Speed Up Reactor 100% speed 2 damaged injectors", function() {
    var speed=100;
    injectorA.initialize(20);
    injectorB.initialize(10);
    injectorC.initialize(0);
    reactor.initialize(speed,injectorA,injectorB,injectorC);
    reactor.SpeedUp();
    expect(reactor).toBeSpeedUp(speed);
  });
});
