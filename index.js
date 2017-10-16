var Injector = require('./lib/Injector');
var Reactor = require('./lib/Reactor');
var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout),
prefix = 'Enterprise’ warp-drive management software> ';

rl.on('line', function(line) {
  switch(line.trim()) {
    case 'hello':
    case 'help':
      console.log('Example> 100 0 0 0');
      break;
    case 'exit':
      console.log('Have a great day saving the galaxy!');
      process.exit(0);
    break;
    default:
    	var inputs=line.split(' ');
		  var speed=inputs[0];
	    injectorA = new Injector();
	    injectorB = new Injector();
	    injectorC = new Injector();
	    reactor = new Reactor();
  		injectorA.initialize(inputs[1]);
  		injectorB.initialize(inputs[2]);
  		injectorC.initialize(inputs[3]);
  		reactor.initialize(speed,injectorA,injectorB,injectorC);
  		reactor.SpeedUp();
    break;
  }
  rl.setPrompt(prefix, prefix.length);
  rl.prompt();
}).on('close', function() {
  console.log('Have a great day saving the galaxy!');
  process.exit(0);
});
console.log(prefix + 'Hello, type speed, damageA,damageB,damageC on this format: speed damageA damageB damageC');
console.log('Example> 100 0 0 0');
rl.setPrompt(prefix, prefix.length);
rl.prompt();