function iterativeLog(array){
  array.forEach(${index}: ${element});
}

function iterate(callback){

}


function doToArray(array, callback){

}


//
// function changeCompletely(element, index, array) {
//   array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
// }
//
// var animals = ["dog", "cat", "squirrel"];
//
// doToElementsInArray(animals, changeCompletely);
//
// // log out animals -- pretty cool, right?
// console.log(animals);

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}
