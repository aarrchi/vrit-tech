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


//Destructuring

//In object destructuring put the variable directly while initializaing 


//normal way
let num = {
    a:1,
    b:2
}
console.log(num);

//Object destructuring way
//put the key directly in the initialization
let {a, b, c = 4} = {
    a:1,
    b:2,
 
}
console.log(a, b, c);



//Array destructuring

//normal way
const test = [1,5, 6, 8];

//destructuring
const [e, f, g, h] = [1, 5, 6, 8];
console.log(e, f, g,h);

const[i, ikl, ...testing] = [1, 4, 5, 7, 9];
console.log(i);
console.log(ikl);
console.log(testing);


//<-----------Object looping method---------------->
/// for in ->>> object
let obj = {
    firstname: 'pasang',
    lastname: 'tamang'
}

for (let name in obj){
    console.log(name, obj[name]);
}



//<-----------Array looping method---------------->
/// for of ->>> Array
const number = [1, 2, 3,4, 5,6,7];

for (let num of number){
    console.log('num', num);
}




//<------------Array has reverse method but not an string-------------->
const string = 'madam test';
//console.log(string.reverse());

//split converts string to array
console.log(string.split('').reverse().join(''));
//console.log(string.split('m'));

const array = [1, 2,3,4 ,5];
console.log(array.reverse());

const {movies} = {
    "movies": [
      {
        "title": "Movie A",
        "year": 2022,
        "genres": [
          {
            "name": "Genre X",
            "classification": {
              "main": "Action",
              "sub": ["Thriller", "Adventure"]
            }
          },
          {
            "name": "Genre Y",
            "classification": {
              "main": "Drama",
              "sub": ["Romance"]
            }
          }
        ],
        "actors": [
          {
            "name": "Actor 1",
            "role": "Protagonist"
          },
          {
            "name": "Actor 2",
            "role": "Antagonist"
          }
        ]
      },
      {
        "title": "Movie B",
        "year": 2019,
        "genres": [
          {
            "name": "Genre Z",
            "classification": {
              "main": "Science Fiction",
              "sub": ["Thriller"]
            }
          },
          {
            "name": "Genre W",
            "classification": {
              "main": "Mystery",
              "sub": ["Suspense"]
            }
          }
        ],
        "actors": [
          {
            "name": "Actor 3",
            "role": "Main Character"
          },
          {
            "name": "Actor 4",
            "role": "Supporting Character"
          }
        ]
      }
    ]
  }


 function checkGenre(g) {

    /* movies.forEach((movie) => {
        //console.log(movie.genres);
        movie.genres.forEach((genre) => {
            //console.log(genre);
            const isGenreInclude = genre.classification.sub.includes(g);
            console.log(isGenreInclude);
        });
      }); */

                                    //map
      const filteredMovie = movies.filter((movie) => {
       
        const data = movie.genres.filter((genre) => {
            
            return genre.classification.sub.includes(g);
            
        });

        //console.log(data);
        return data.length > 0 && movie;
        //return data.length > 0 ? movie: 'No movie with sych genre';
      });

      console.log(filteredMovie);


 };

 checkGenre('Romance');