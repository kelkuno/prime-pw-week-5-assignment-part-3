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

function searchFeature (artist, yearPublished, group){
    let newCollection = [];

    if (artist === undefined && yearPublished === undefined && group === undefined){
        console.log('do not forget to add search object input');
        return collection;
    } // end of conditional

    for(let i=0; i < group.length; i++){
        if(artist === group[i].artist || yearPublished === group[i].yearPublished){
            newCollection.push(group[i]);
            console.log ('it is a match');
            return newCollection;
        } else if(artist != group[i].artist || year != group[i].yearPublished) {
            console.log ('it is not a match');
            return newCollection;
        } // end of conditional
    } // end of loop
} // end of function

//added a few albums to collection:
console.log('adding this to collection:', addToCollection('Is this it', 'The Strokes', 2001));
console.log('adding this to collection:', addToCollection('Room on fire', 'The Strokes', 2003));
console.log('adding this to collection:', addToCollection('Keep it togegther', 'Guster', 2003));
console.log('adding this to collection:', addToCollection('Hollywood Africans', 'Jon Batiste', 2018));
console.log('adding this to collection:', addToCollection('Stripped', 'Christina Aguilera', 2002));
console.log('adding this to collection:', addToCollection('Careless Love', 'Madeleine Peyroux', 2004));

//output all albums in collection
showCollection(collection);

//Checks to see if the input artist is in the album collection and returns results
findByArtist('Guster', collection);
findByArtist('The Strokes', collection);
findByArtist('Moby', collection);

console.log('--search feature tests!--');

//searchFeature ('Ray Charles', 1957, collection);
searchFeature('Jon Batiste', 2018, collection);
//searchFeature();
/**************

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