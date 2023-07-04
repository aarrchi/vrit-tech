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


