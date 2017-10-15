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

  it("Case 1", function() {
    var speed=100;
    injectorA.initialize(0);
    injectorB.initialize(0);
    injectorC.initialize(0);
    reactor.initialize(speed,injectorA,injectorB,injectorC);
    reactor.SpeedUp();
    expect(reactor).toBeSpeedUp(speed);
  });
  it("Case 2", function() {
    var speed=90;
    injectorA.initialize(0);
    injectorB.initialize(0);
    injectorC.initialize(0);
    reactor.initialize(speed,injectorA,injectorB,injectorC);
    reactor.SpeedUp();
    expect(reactor).toBeSpeedUp(speed);
  });
  it("Case 3", function() {
    var speed=30;
    injectorA.initialize(0);
    injectorB.initialize(0);
    injectorC.initialize(0);
    reactor.initialize(speed,injectorA,injectorB,injectorC);
    reactor.SpeedUp();
    expect(reactor).toBeSpeedUp(speed);
  });
  it("Case 4", function() {
    var speed=100;
    injectorA.initialize(20);
    injectorB.initialize(10);
    injectorC.initialize(0);
    reactor.initialize(speed,injectorA,injectorB,injectorC);
    reactor.SpeedUp();
    expect(reactor).toBeSpeedUp(speed);
  });
  it("Case 5", function() {
    var speed=80;
    injectorA.initialize(0);
    injectorB.initialize(0);
    injectorC.initialize(100);
    reactor.initialize(speed,injectorA,injectorB,injectorC);
    reactor.SpeedUp();
    expect(reactor).toBeSpeedUp(speed);
  });
  it("Case 6", function() {
    var speed=150;
    injectorA.initialize(0);
    injectorB.initialize(0);
    injectorC.initialize(0);
    reactor.initialize(speed,injectorA,injectorB,injectorC);
    reactor.SpeedUp();
    expect(reactor).toBeSpeedUp(speed);
  });
  it("Case 7", function() {
    var speed=140;
    injectorA.initialize(0);
    injectorB.initialize(0);
    injectorC.initialize(30);
    reactor.initialize(speed,injectorA,injectorB,injectorC);
    reactor.SpeedUp();
    expect(reactor).toBeSpeedUp(speed);
  });
  it("Case 8", function() {
    var speed=170;
    injectorA.initialize(20);
    injectorB.initialize(50);
    injectorC.initialize(40);
    reactor.initialize(speed,injectorA,injectorB,injectorC);
    reactor.SpeedUp();
  });
});
