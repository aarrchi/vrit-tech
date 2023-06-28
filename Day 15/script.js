const array1 = [7,2,9,1,5];

//map, forEach, reduce only used in array
//if you use map you have to return something


const findMaximumMinimumValue = (arr) => {
    let min = arr[0];
    let max = arr[0];


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
document.write(`${num.min}, ${num.max}`);