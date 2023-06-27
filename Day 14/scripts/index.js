//Global Scope and Block scope

//outermost variable is in global scope
//variables inside function's top, if and else are in block level scope. All of them 
//refers to different variables 

let str = 2;
console.log(str);

function reverseValue(value) {
    let str = 3;
    console.log(str);
    if(typeof value === 'number' ){
       let str = value.toString();
       console.log(str);
    }else{
       let str = value;
       console.log(str);
    }
 
    let length = str.length;
    let reverseString = '';
    for (i = length-1; i >= 0; i--){
        reverseString = reverseString + str[i];
    }

    console.log(reverseString);
    (reverseString === str ? console.log(str, 'is a palindrome'): console.log(str, 'is not a palindrome'))
}



reverseValue('madam');


