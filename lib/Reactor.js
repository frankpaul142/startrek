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
    console.log('Maximum operating time: '+this.injectors[0].getTime());
    if(response==''){
      if(this.injectors[0].getCapacity()==0){
        console.log('\x1b[31m%s\x1b[0m','Warning Injector A destroyed');
      }else{
        console.log('Injector A: '+this.injectors[0].getCapacity()+'mg/s'); 
      } 
      if(this.injectors[1].getCapacity()==0){
        console.log('\x1b[31m%s\x1b[0m','Warning Injector B destroyed');
      }else{
        console.log('Injector B: '+this.injectors[1].getCapacity()+'mg/s'); 
      } 
      if(this.injectors[2].getCapacity()==0){
        console.log('\x1b[31m%s\x1b[0m','Warning Injector C destroyed');
      }else{
        console.log('Injector C: '+this.injectors[2].getCapacity()+'mg/s'); 
      } 
    }
    console.log(response);
};
module.exports = Reactor;