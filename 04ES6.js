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

var mapping = new Map();

mapping.set('key01','mezbah')
mapping.set('key02','uddin')
mapping.set('key03','rafi')
mapping.set('key03','rafi')

console.log(mapping.keys());

for (let allmaps of mapping){
    console.log(allmaps.keys());
}


..........set

const firstSet = new Set();
firstSet.add('rafi')
firstSet.add('mezbah')
firstSet.add('uddin')
firstSet.add('uddin')
firstSet.clear();
firstSet.delete('rafi');

console.log(firstSet);
