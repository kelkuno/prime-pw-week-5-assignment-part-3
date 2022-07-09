console.log('***** Music Collection *****')
let collection = [];


function addToCollection (title, artist, yearPublished, track) {
    
    let newAlbum = { };

    newAlbum.title = title;
    newAlbum.artist = artist;
    newAlbum.yearPublished = yearPublished;
    newAlbum.track = track;
   
    collection.push(newAlbum);
    return newAlbum;
} // end of function

function showCollection(group){
    console.log('number of items: ', group.length);
    for (let i = 0; i < group.length; i++){
        console.log(group[i].title + ' by ' + group[i].artist + ', published in ' + group[i].yearPublished);
        
        if (group[i].track){
         console.log('name: '+ group[i].track.name + ' duration: ' + group[i].track.duration);
        } // end of conditional to check if there is a name and duration object. 
        
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

function searchFeature (artist, yearPublished){
    let newCollection = [];

    if (artist === undefined && yearPublished === undefined){
        console.log('do not forget to add search object input');
        return collection;
    } // end of conditional

    for(let i=0; i < collection.length; i++){
        if(artist === collection[i].artist && yearPublished === collection[i].yearPublished){
            newCollection.push(artist, yearPublished);
           // console.log ('it is a match');
            newCollection;
        } else if(artist != collection[i].artist || yearPublished != collection[i].yearPublished) {
            //console.log ('it is not a match', newCollection);
            newCollection;
        } //end of conditional
    } // end of loop
    return newCollection;
} // end of function

//added a few albums to collection:
console.log('adding this to collection:', addToCollection('Is this it', 'The Strokes', 2001));
console.log('adding this to collection:', addToCollection('Room on fire', 'The Strokes', 2003));
console.log('adding this to collection:', addToCollection('Keep it togegther', 'Guster', 2003));
console.log('adding this to collection:', addToCollection('Hollywood Africans', 'Jon Batiste', 2018));
console.log('adding this to collection:', addToCollection('Stripped', 'Christina Aguilera', 2002));
console.log('adding this to collection:', addToCollection('Careless Love', 'Madeleine Peyroux', 2004));

//output all albums in an inputed collection
console.log('Show collection testing-----------');
showCollection(collection);
console.log('------------End of show collection testing-');

//Checks to see if the input artist is in the album collection and returns results
findByArtist('Guster', collection);
findByArtist('The Strokes', collection);
findByArtist('Moby', collection);

//Checks search feature for artist in array, artist not in array and no object input to function. 
console.log('--search feature tests!--');
console.log('this should be empty array:', searchFeature ('Ray Charles', 1957));
console.log('this shoould show array with artist and year added', searchFeature('Jon Batiste', 2018));
console.log('this should display collection array', searchFeature());

//add a few tracks to album using addToCollection:
addToCollection ('Gets Next to You', 'Al Green', 1971, {name: 'Tired of being alone', duration: '2:52'});
addToCollection ('Gets Next to You', 'Al Green', 1971, {name: 'Light My Fire', duration: '3:55'});
addToCollection ('Strangers in the Night', 'Frank Sinatra', 1969, {name: 'Summer Wind', duration: '2:58'});

//testing showCollection with tracks added
console.log('showCollection w tracks testing-----------');
showCollection(collection);
console.log('------------End of showCollection w tracks testing-');
