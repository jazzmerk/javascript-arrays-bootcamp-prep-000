var chocolateBars = ['snickers','hundred grand', 'kitkat','skittles'];

function addElementToBeginningOfArray(array,element){
var newarray=[];
newarray=[element,...array];
return(newarray);
}


function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray (array,element){
  newarray=[]; 
  newarray=[...array,element];
  return newarray;
  }

function destructivelyAddElementToEndOfArray(array,element){
  array.push (element);
 return(array);
}

function accessElementInArray (array, index){
var element;
element=array[index]; 
return (element);
}
  
function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift();
  return (array);
}

function removeElementFromBeginningOfArray(array){
  var newarray[];
  newarray=array;
  newarray.slice(1);
  return(newarray);
}
