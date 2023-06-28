

//Arrow Function 

/* const sumOfTwoNumbers = (num1, num2) => {
    console.log(num1 + num2);
}

sumOfTwoNumbers(3, 2);


 */


/* const reverseValue = (value) => {
    let str;
    if (typeof value === 'number'){

     
        str = value.toString();
    }else{
        str = value;
    }
    let length = str.length;
    let reverseString = '';

    for(let i = length - 1; i >= 0; i--){
       /*  console.log(str[i], i); */

      /*   reverseString = reverseString + str[i];
    }

   return {
    revValue: reverseString,
    strValue: str
} ;
}; */

/* 
console.log(reverseValue('madam')); */

/* const data = reverseValue('madam');

console.log(data);




const findPalindrome = (reverseString, str) => {
    if(reverseString === str){

       /*  return true; */
       /*  console.log(str, ' is a palindrome');
    }

    else{

       /*  return false; */
        /* console.log(str, ' is not a palindrome');
    } */ 
 
   /*  if(true){
        console.log('it is a palindrome');
    }else{
        console.log('it is not a palindrome')
    } */
//}

//findPalindrome(data.revValue, data.strValue);


/* <----------------------------------Map and ForEach-------------------------------------> */


//map returns but forEach does not return

//use map when you wwant to return something use forEach when you only want to apply logic but not to return anything



/* numbers = [1,2, 3,4,5,6,7,8,9,10];

numbers.map((item, index) => {
    console.log(item, index);
})


const data = numbers.map((number) => {
    if(number % 2 === 0) return `${number} even`;
    else return `${number} odd`;

});

console.log(data);
 */

/* const data = numbers.forEach((number) => {
    if(number % 2 === 0) return `${number} even`;
    else return `${number} odd`;

});

console.log(data); */