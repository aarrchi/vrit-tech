

//******************************************************************* */
//Functions >> goal 
//-> specific set of task > specific solution
//-> removes code repeatation


//es5/es6 -> specification

//undefined means variable is declared but value is not assigned
//null means could not find


//function declare
function reverseString(num1, num2){ //parameter value passed from down
    console.log(num1, num2);
}


//function call
reverseString(10, 20); //pass value here(dynamic data)



/* function reverse(str) {
    let length = str.length;
    let reverseString = '';
    for (i = length-1; i >= 0; i--){
        reverseString = reverseString + str[i];
    }

    console.log(reverseString);
    (reverseString === str ? console.log(str, 'is a palindrome'): console.log(str, 'is not a palindrome'))
}

reverse('madam');
reverse('abcba');
reverse('pasang'); */



//for palidrome numbers

function reverseValue(value) {
    let str;
    if(typeof value === 'number' ){
        str = value.toString();
    }else{
        str = value;
    }
 
    let length = str.length;
    let reverseString = '';
    for (i = length-1; i >= 0; i--){
        reverseString = reverseString + str[i];
    }

    console.log(reverseString);
    (reverseString === str ? console.log(str, 'is a palindrome'): console.log(str, 'is not a palindrome'))
}


reverseValue(1222221);

