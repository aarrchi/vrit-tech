const numbers = [1,2,3,2,1,2,3,3,3];
/* 
f={
    1:2,
    2:2,
    3:1, 
} */
/* const findMaxCount = (arr) => {
    let frequency = {};
    let maxCount = 0;
    let frequentElement;


 numbers.forEach((num) => {
   
        //console.log(num);
        if(frequency[num]){
            frequency[num] ++
            
        } else{
            frequency[num] = 1;
              
        }

        if(frequency[num] > maxCount){
            maxCount = frequency[num];
            frequentElement = num;
        }


    });
    console.log(maxCount)
    console.log(frequency);
    console.log(frequentElement + 'is the most frequent element');
    
    
    console.log(Object.keys(frequency)); //see objects.keys
    console.log(Object.values(frequency));

    Object.values(frequency).forEach((val, index) => {
        console.log(val, index);
        if (val > maxCount ){
            maxCount = val;
           
        }

        
    });



};

findMaxCount(numbers);
 */
/* 

//<------------------------STRING METHODS---------------------------->

let firstName = 'firstName';
firstName.toUpperCase();
console.log(firstName); 


let firstName = 'firstName';
console.log(firstName.split(''));

*/

//<-------------------DOM-------------->

/* //Get Element by Id
console.log(document.getElementById('cont'));


//Get Element by ClassName
console.log(document.getElementsByClassName('container'));

console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByTagName('p'))


//querySelector -> can select id, classname, tag etc but selects only the first one or the top most
console.log(document.querySelector('p'))
console.log(document.querySelector('.container'));
console.log(document.querySelector('#cont'));


//querySelectorAll returns all the selected element not only the first one.
console.log(document.querySelectorAll('p'));
 */


const container = document.querySelector('#container');
container.style.backgroundColor= 'red';
container.style.width='200px';
container.style.height='300px';




