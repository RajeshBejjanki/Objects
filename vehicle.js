(function () {
  
    //object literals.
     var vehicle ={};
        
    function vehicle() {
        this.tyres = 0;
        this.engine = "";
        this.color="";
        var vin="";
    }

    var bike = new vehicle();
  
    var car = new vehicle();
   
    console.log(bike);
    console.log(car);


})();