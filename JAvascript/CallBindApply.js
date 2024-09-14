
//===============Call=========================

var Emp1={name:"Eshwara",address:"Davangere"}

var Emp2={name:"deginal",address:"bengaluru"}

function CallMethod(greeting1,greeting2){
    console.log(greeting1 +" "+this.name+" "+this.address+" "+greeting2)
}

CallMethod.call(Emp1,"hello","how you")//invokes the function parameter one by one

CallMethod.apply(Emp2,["hi","hw r u"])//invokes the function parameter in an array


var newEmp=CallMethod.bind(Emp1)//returns new function allowing to pass any no of parameters
newEmp("hai","h r u")

