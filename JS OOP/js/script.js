//construction function
function Person(){

}

const aan = new Person();
const triya = new Person();

//method di construction function

 function Orang(){
    this.firstnName = ""
    this.lastName = ""
    this.sayHello = function(name){
        console.info(`Hello ${name}, my name is ${this.firstnName}`)
    }
 }

 const anji = new Orang();
 anji.firstnName = "aan";
 anji.sayHello("asu");

 console.log(anji);