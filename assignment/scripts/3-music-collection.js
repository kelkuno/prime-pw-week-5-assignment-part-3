console.log('***** Music Collection *****')
let collection = [];

function addToCollection (title, artist, yearPublished) {
    
    let newAlbum = { };

    newAlbum.title = title;
    newAlbum.artist = artist;
    newAlbum.yearPublished = yearPublished;
   
    collection.push(newAlbum);
    return newAlbum;
} // end of function

function showCollection(group){
    console.log(group.length);
    for (let i = 0; i < group.length; i++){
        console.log(group[i].title + ' by ' + group[i].artist + ', published in ' + group[i].yearPublished);
    } // end of for loop

} // end of function

function findByArtist(artist, group) {
    let artistResults = [];
    for(let i=0; i<group.length; i++){
        if( artist === group[i].artist){
            console.log('win');
            artistResults.push(group[i]);
        } // end of conditional
    } //end of for loop
    console.log(artistResults);
    return artistResults;
} //end of function

console.log('adding this to collection:', addToCollection('Is this it', 'The Strokes', '2001'));
console.log('adding this to collection:', addToCollection('Room on fire', 'The Strokes', '2003'));
console.log('adding this to collection:', addToCollection('Keep it togegther', 'Guster', '2003'));
console.log('adding this to collection:', addToCollection('Hollywood Africans', 'Jon Batiste', '2018'));
console.log('adding this to collection:', addToCollection('Stripped', 'Christina Aguilera', '2002'));
console.log('adding this to collection:', addToCollection('Careless Love', 'Madeleine Peyroux', '2004'));

showCollection(collection);
findByArtist('Guster', collection);
findByArtist('The Strokes', collection);
findByArtist('Moby', collection);
/**************
 * ### Required Features

________Create a variable `collection` that starts as an empty array.

_________Add a function named `addToCollection`. This function should:
  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
  - Create a new object having the above properties
  - Add the new object to the end of the `collection` array
  - Return the newly created object

__________Test the `addToCollection` function:
  - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  - Console.log each album as added using the returned value.
  - After all are added, console.log the `collection` array.

_____________Add a function named `showCollection`. This function should:
  - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  - Console.log the number of items in the array.
  - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

______________Test the `showCollection` function.

- Add a function named `findByArtist`. This function should:
  - Take in `artist` (a string) parameter
  - Create an array to hold any results, empty to start
  - Loop through the `collection` and add any objects with a matching artist to the array.
  - Return the array with the matching results. If no results are found, return an empty array.

- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

> When testing your functions, write all tests in the JavaScript file!


### Stretch goals

- Create a function called `search`. This function should:
  - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
  ```
  { artist: 'Ray Charles', year: 1957 }
  ```
  - The returned output from `search` should meet these requirements:
    - Return a new array of all items in the `collection` matching *all* of the search criteria.
    - If no results are found, return an empty array.
    - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

- Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
  - Update the `addToCollection` function to also take an input parameter for the array of tracks.
  - Update `search` to allow a `trackName` search criteria.
  - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
```
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
    3. NAME: DURATION
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
```

> Make sure to test all your code!



## Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!

 */