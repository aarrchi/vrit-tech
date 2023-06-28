//<----------------------MaxMin number ------------------>


//const array1 = [7,2,9,1,5];

//map, forEach, reduce only used in array
//if you use map you have to return something


/* const findMaximumMinimumValue = (arr) => {
    let min = arr[0];
    let max = arr[0];
 */

    /* arr.forEach((item, index) => {

        //console.log(item, index);
        console.log(`${item} < ${min}`, item < min, item);
        if(item < min){
            min = item;
            
        }
        if(item > max){
            max = item;
        }

       
    }) */
/* 
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }

        if (arr[i] > max){
            max = arr[i];
        }
    }

    return{
        min, max
    }
    //console.log(min);
    //console.log(max);
}

const num = findMaximumMinimumValue(array1);
document.write(`${num.min}, ${num.max}`); */



//<----------------------Array methods ------------------>


/* let array2 = [10,1000,0];
array2.push(30); //adds value to the last index
console.log(array2);


array2.pop();//removes value of the last index; removes 30
console.log(array2);

array2.pop();//removes 0
console.log(array2);



array2.unshift('Hello world'); //appends value in the first index
console.log(array2);

array2.shift();//removes value from the first index
console.log(array2);

array2.shift();//now removes the value from the first index
console.log(array2);


console.log(array2.length);
 */



//slice selects or shows value from this index to that index
//slice syntax
//arrya.slice()
//arrya.slice(start)
//arrya.slice(start, end)
/* const newArray = [1,2,3,4,5,6,7];
console.log(newArray.slice()); //shows all the values

console.log(newArray.slice(2)); //shows all the values from index 2
console.log(newArray.slice(1,4)); //shows value from index 1 to 3
console.log(newArray.slice(0,7));
console.log(newArray.slice(2,3)); //shows the value of index 2 only;
console.log(newArray.slice(1));

//splice extracts or deletes the item or value
//array.splice(start, deletecount)
//array.splice(start, deletecount, item)

array5 = [1,2,3,4,5,6,7];
console.log(array5.splice(2,4)); //returns value from 2 index and then selects 4 items.


array = [11,12,13,14,15,16,17];
const a = array.splice(1, 3, 9, 10) //starts from index 1 then delters or extract 3 items after index1 and then adds 9 and 10
console.log(a);




//includes method. checks if the arrays has this value or not
const b = [1,2,3,4,5];

isInclude = false;
b.forEach((item) => {
    if(item === 2){
        isInclude = true;
    }
})

console.log(isInclude);
console.log(b.includes(5));

 */

//<---------------------------------------- Check Duplicates ---------------------------->


/* const name = ['John', 'Test', 'John', 'Hello']


function hasDuplicate(arr){
    for(let i = 0; i < arr.length; i++){
        //console.log(arr[i]);
        for(let j = i+1; j <arr.length; j++){
            //console.log(arr[i], arr[j], i, j);
            if(arr[i] ===arr[j]){
                return true;
            }
        }

     return false;

    }
}

console.log(hasDuplicate(name));



let isDuplicate = false;

function  duplicate(arr){

    arr.forEach((item, i) => {
        for(let j = i+1; j <arr.length; j++){
          
            if(item ===arr[j]){
                isDuplicate = true;
            }
    }
})

    
    return isDuplicate;

}

console.log(duplicate(name)); */



//<-------------------------Array Filter ----------------------->

const name = ['John', 'Test', 'John', 'Hello']

name.filter((n) => {
    console.log(n); //shows all of the value
})



const name1 = ['John', 'Test', 'John', 'Hello']

const abc = name1.filter((n) => {
   if(n === 'John'){   // if the return condition matches then the value which is matched is showed
    //return true
    return 'nirajan'  
    //no matter whatever you write in return, it returns John as it matches in the condition

   }
})

console.log(abc);