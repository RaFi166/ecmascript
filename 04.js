console.log('rafii');
........array

var array=['a', 'b', 'c', 'd'];
for (var alldata of array){
    console.log(alldata);

}

...........multidimensional array

var array = ['a', 'b', 'c'];
var arrayTwo = ['d','e', 'f'];
var arrayThree = ['g', 'h', 'i'];

var totalArray = [array, arrayTwo, arrayThree];

console.log(totalArray[2][2]);

............map

var firstmap = new Map();
firstmap.set ('name', 'rafi');
console.log(firstmap.values());
