console.log('hello rafi');

........class,object
class Name{
    fname(){
        console.log('mezbah');
    }
    lname(lname){
        console.log(lname);
    }
}

const nameObject = new Name;
 nameObject.fname();
 nameObject.lname('rafi');

........class constructor
class Name{
    constructor(){
    console.log('mezbah uddin rafi');
 }

}

new Name();

class Sum {
    constructor(a,b){
        console.log(a+b);
    }
}

new Sum(10,20);

class Sum{
    constructor(){
        this.a =10;
        this.b = 20;
    }
    sumoftwo(){
        console.log(this.a+this.b);
    }
}

var obj = new Sum();
obj.sumoftwo();

........static keyword

class Fruits{
   static apple(){
        console.log('heres all apples available');
    }
}
Fruits.apple();


........inheritance

class Name{
    fname(){
        console.log('mezbah');
    }
    lname(){
        console.log('rafi');
    }
}

class Human extends Name{

}

var obj = new Human();
obj.lname();

.......super keyword

class Parent{

    fname(){
        console.log('mezbah');
    }
    lname(){
        console.log('rafi');
    }
}

class Child extends Parent{
    demo (){
        super.fname();
        super.lname();

    }
}

var obj = new Child();
obj.demo();

