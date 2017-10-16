function Reactor() {
}
Reactor.prototype.initialize= function(speed,injectorA,injectorB,injectorC) {
    this.speed=speed;
    this.injectors=[injectorA,injectorB,injectorC];
  };
Reactor.prototype.SpeedUp= function() {
    var speed=this.speed*3;
    var capacities=[];
    var response='';
    var total=0;
    var clui = require('clui');
    this.injectors.forEach(function(injector) {
      if(injector.getCapacity()>0){
        capacities.push(injector.getCapacity());
      }
    });
    if(capacities.length)
    total=capacities.reduce(function(a, b){ return a + b; });
    var extra=speed-total;
    extra=extra/capacities.length;
    this.injectors.forEach(function(injector) {
          if(!injector.Addextra(extra))
          response='Unable to comply';
    });
    //print result
    console.log('');
    console.log('Maximum operating time: '+this.injectors[0].getTime());
    console.log('');
    if(response==''){

      if(this.injectors[0].getCapacity()==0){
        console.log('\x1b[31m%s\x1b[0m','Warning Injector A destroyed');
        console.log('');
      }else{
        var Gauge = clui.Gauge;
        console.log('Injector A: '); 
        console.log(Gauge(this.injectors[0].getCapacity(),199,20,101,this.injectors[0].getCapacity()+'mg/s'));
        console.log('');
      } 
      if(this.injectors[1].getCapacity()==0){
        console.log('\x1b[31m%s\x1b[0m','Warning Injector B destroyed');
        console.log('');
      }else{
        var Gauge1 = clui.Gauge;
        console.log('Injector B: ');
        console.log(Gauge1(this.injectors[1].getCapacity(),199,20,101,this.injectors[1].getCapacity()+'mg/s'));
        console.log(''); 
      } 
      if(this.injectors[2].getCapacity()==0){
        console.log('\x1b[31m%s\x1b[0m','Warning Injector C destroyed');
        console.log('');
      }else{
        var Gauge2 = clui.Gauge;
        console.log('Injector C: ');
        console.log(Gauge2(this.injectors[2].getCapacity(),199,20,101,this.injectors[2].getCapacity()+'mg/s'));
        console.log(''); 
      } 
    }
    console.log(response);
};
module.exports = Reactor;