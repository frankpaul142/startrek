function Injector() {
}
Injector.prototype.initialize = function(damage=0) {
    this.damage = damage;
    this.extra = 0;
    this.running= damage !== 0 ? false : true;
    this.capacity=100-this.damage;
    this.running_time =damage == 100 ? 0 : -1; //-1 = ∞
};
Injector.prototype.Addextra = function(extra) {
      var response=true;
      if(this.capacity>0){
        if(this.capacity+extra<=this.capacity+99){
          if(extra>0){
            this.extra=extra;
            var ext=Math.abs(this.extra);
            this.running_time=100-ext;
            this.capacity=this.capacity+this.extra;
          }else{
             var ext=Math.abs(extra);
             this.capacity=this.capacity-ext;
          }
        }else{
          response=false;
          this.running_time=0;
        }
      }
      return response;
  };
Injector.prototype.getCapacity = function() {
      return this.capacity;
  };
module.exports = Injector;