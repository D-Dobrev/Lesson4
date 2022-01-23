/* EXERCISE 1
  Given the object below, write a piece of code for programmatically removing the last skill from the skills array inside the me object.
 */
  console.log("Exercise 1");
  const me = {
    name: "Joh",
    lastName: "Doe",
    skills: ["javascript", "html", "css"],
  };
  remove = me.skills.pop(2);
  console.log(me.skills);
  /* EXERCISE 2
  Write a piece of code to create an array of only ODD numbers from 1 to 100
   */
  console.log("Exercise 2");
  let oddNumbers = [];
  for  ( let i = 0; i < 100; i++ ) {
      if  (i % 2 !== 0 ) {
          oddNumbers.push(i);
      }
  }
 console.log(oddNumbers);
  /* EXERCISE 3
  Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 100 inclusive
   */
  console.log("Exercise 3");
let arr = [];
while( arr.length < 10) {
    var random = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(random)) arr.push(random);
}
  console.log(arr); 
  /* EXERCISE 4
    Write a piece of code for getting only even numerical values from an array . 
   */
    console.log("Exercise 4");
    let evenNumbers = [];
    for  ( let i = 0; i < 20; i++ ) {
        if  (i % 2 === 0 ) {
            evenNumbers.push(i);
        }
    }
   console.log(evenNumbers);
  
  /* EXERCISE 5
  Write a piece of code to sum up the numbers in an array
   */
  console.log("Exercise 5");
  const sumUp = [10, 15, 1, 5];
  let result = 0;
  for (let z = 0; z < sumUp.length; z++) {
      let value = sumUp[z];
      result = result + value;
  }
  console.log(result);
  
  /* EXERCISE 6
   Write a piece of code for increasing all the numerical values in a array by 1.
  */
   console.log("Exercise 6");
   let numeric = [1, 2, 3, 4];
   for (let t = 0; t < numeric.length; t++) {
       numeric[t] = numeric[t] + 1; 
   }
   console.log(numeric);
  
  /* EXERCISE 7 (EXTRA)
   Write a piece of code for deleting only even entries from an array.
  */
   console.log("Exercise 7");
   let even = [1, 2, 3, 4, 5, 6];
   for (let v = 0; v < even.length; v++) {
       if (even[v] % 2 === 0) {
           even.splice(v, 1); /*whats the role of , and 1*/
       }
   }
   console.log(even);
  
  /* EXERCISE 8
  Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 10 inclusive WITHOUT duplicates
   */
  console.log("Exercise 8");
let randomElement = [];
while( randomElement.length < 10) {
    let random = Math.floor(Math.random() * 10) + 1 ; /*why plus 1*, how to create random that can repeat*/
    if(randomElement.indexOf(random) === -1) randomElement.push(random);
}
  console.log(randomElement); 

  
  /* EXERCISE 9
   Replace all the strings contained in an array with their length.
   es.: ["strive", "is", "great"] => [6, 2, 5]
  */
   console.log("Exercise 9");
   const strive = ["strive", "is", "great"];
   for (let b = 0; b < strive.length; b++) {
       strive[b] = strive[b].length
   }
   console.log(strive);

  
  /* EXERCISE 10
   Write a piece of code for reverting an array.
   es:
   [1, 3, 5] ==> [5, 3, 1]
  */
   console.log("Exercise 10");
 let str = [1, 3, 5]
  let reverseStr = []
 for(let i = str.length; i > 0; i--) {
   reverseStr.push(str[i -1]); /*why minus 1*/
 }
 console.log(reverseStr);
  /* EXERCISE 11
   Write a piece of code for getting the maximum numerical value from an array.
  */
 let big = [1, 5, 10 , 20, 30]

 console.log(Math.max(...big));
  
  /* This movies array is used throughout the exercises. You're not supposed to alter it. */
  const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ];
  
  /* EXERCISE 12
      Write a piece of code to  find the oldest movie in the provided movies array.
  */
 


  
  /* EXERCISE 13
      Write a piece of code to get the number of movies contained in the provided movies array.
  */
  console.log("Exercise 13");
  let length = movies.length;
  console.log(length);

  /* EXERCISE 14
      Write a piece of code to create an array with just the titles of the movies contained in the provided movies array.
  */
 console.log("Exercise 14");
 const titles = []
 for (let y = 0; y < movies.length; y++) {
    titles.push (movies[y].Title);
 }
 console.log(titles);

  
  /* EXERCISE 15
     Write a piece of code to get only the movies produced in this millennium from the provided movies array.
  */
     console.log("Exercise 15");
     const years = []
     for (let x = 0; x < movies.length; x++) {
         let value = (movies[x].Year);
         if ( value >= 2000) {
        years.push (value);
         }
     }
     console.log( years);
    
  /* EXERCISE 16
     Write a piece of code to get  the movie with the  id given below from the provided movies array.
  */
  const id = "tt0355702";
  
  console.log("Exercise 16");
     const imdb = []
     for (let x = 0; x < movies.length; x++) {
         let value = (movies[x].imdbID);
         if ( value === id) {
        imdb.push (value);
         }
     }
     console.log( imdb);
  
  /* EXERCISE 17
       Write a piece of code to get  the  the sum of all the years in which the movies in the provided movies array have been produced.
  */
  
  /* EXERCISE 18
     Write a piece of code to get  all the movies in the provided movies array which contain the string value (provided below) in the title.
  */