//Global Scope and Block scope

//outermost variable is in global scope
//variables inside function's top, if and else are in block level scope. All of them 
//refers to different variables 


//you cannot delcare same variable twice in the same scope


//let str = 2;
//let str = 2; you cannot decalre the same variable multiple times in same scope
//console.log(str);

/* function reverseValue(value) {
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
 */



//but if let variable is below the and the variable 
//is called at first then it will cause4 issu;

console.log(b);


var b = 10;
var a = 20;

