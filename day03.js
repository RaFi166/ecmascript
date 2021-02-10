

.......if..else
var name= {
    fname:'mezbah uddin',
    lname:'rafi',
}

if (name['fname'=='mezbah udin']){
    console.log('it is false');
}
else{
    console.log('this is right');
}

.......simple function
function sum(x,y){
    console.log(x+y);
}
sum(1,1)


......rest parameter

function sum(...x){
    console.log(x);
}
sum(1,2,3,4,5,6,7,8,9)


function name() {
    console.log('rafi');
    console.log('rafi');
    console.log('rafi');
}
name()

.......arrow rest anonymous

var name=(...x)=>{
    console.log(x);
}
name('hello','rafi')

