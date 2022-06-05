/*
var x = 2 ; var piso = x; var espacio = ""; var arbol = "*";

for (let i = 0; i < x; i++) {

  for (let z = 0; z <= i; z++) {
    espacio = espacio + "1";
  }

  espacio = espacio + arbol;
  console.log(espacio);


}



const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
ourDog.name = "Camperr";
console.log(ourDog);
*/

// Configuración
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== ""){
    records[id][prop] = value;
  }else if(prop === "tracks" && records[id].hasOwnProperty("tracks") === false){
    records[id][prop] = [value];
  }else if(prop === "tracks" && value != ""){
    records[id].tracks.push(value);
  }else if(value === ""){
    delete records[id][prop];
  }
  return records;

}
console.log(recordCollection);
console.log("****************************************************************************");
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 1245, "artist", "");
//recordCollection[5439].artist = "ABBA"
console.log(recordCollection);
