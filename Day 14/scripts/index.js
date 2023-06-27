

const str = 'madam';
const length = str.length;


/* for(let i = 0; i<length; i++){

    console.log(str[i], i);

} */


reverseString = '';

for(let i = length-1; i>=0; i-- ){
   reverseString = reverseString + str[i];
   debugger;
}

if(reverseString === str){
    console.log(str + ' is a palindrome');
}else{
    console.log(str + ' is not a palindrome');
}

/* console.log(reverseString); */