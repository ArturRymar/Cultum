'use strict';

const array = [
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male"
    },
    {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a"
    },
    {
        "name": "R2-D2",
        "height": "96",
        "mass": "32",
        "hair_color": "n/a",
        "skin_color": "white, blue",
        "eye_color": "red",
        "birth_year": "33BBY",
        "gender": "n/a"
    },
    {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hair_color": "none",
        "skin_color": "white",
        "eye_color": "yellow",
        "birth_year": "41.9BBY",
        "gender": "male"
    },
    {
        "name": "Leia Organa",
        "height": "150",
        "mass": "49",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "19BBY",
        "gender": "female"
    },
    {
        "name": "Owen Lars",
        "height": "178",
        "mass": "120",
        "hair_color": "brown, grey",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "52BBY",
        "gender": "male"
    },
    {
        "name": "Beru Whitesun lars",
        "height": "165",
        "mass": "75",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "47BBY",
        "gender": "female"
    },
    {
        "name": "R5-D4",
        "height": "97",
        "mass": "32",
        "hair_color": "n/a",
        "skin_color": "white, red",
        "eye_color": "red",
        "birth_year": "unknown",
        "gender": "n/a"
    },
    {
        "name": "Biggs Darklighter",
        "height": "183",
        "mass": "84",
        "hair_color": "black",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "24BBY",
        "gender": "male"
    },
    {
        "name": "Obi-Wan Kenobi",
        "height": "182",
        "mass": "77",
        "hair_color": "auburn, white",
        "skin_color": "fair",
        "eye_color": "blue-gray",
        "birth_year": "57BBY",
        "gender": "male"
    }
];

const object = {
    "name":"some name",
    "height":"182",
    "mass":"77",
    "hair_color":"black",
    "skin_color":"red",
    "eye_color":"brown",
    "birth_year":"XXXXXX",
    "gender":"female"
};

function task1(arr) {             //Remove slash and change 'name' on 'label', type of height and mass
    return arr.map((elem) => {
        const {name,height,mass,...rest} = elem;
        return Object.keys(rest).reduce((result, key) => {
            return key.includes('_') ?
                {...result, [key.split('_').join('')]: rest[key]} :
                {...result, [key]: rest[key]}
        }, {label: name, height: +height, mass : +mass});
    });
}

console.log(task1(array));

function task2(arr, gender) {                          //Function for filter array
    return arr.filter(elem => elem.gender === gender);
}

console.log(task2(array, 'male'));

function task3(arr,obj) {                              //Function for add object
   return [...arr.slice(0,2),obj,...arr.slice(2)];
}

console.log(task3(array,object));

function task4(arr, name) {                            //Function for search object
    return arr.find( elem => elem.name === name) || 'Not found';
}

console.log(task4(array,'R2-D2'));

function task5(arr, gender) {                           //Function for filter from index 2
    return arr.slice(2).filter(elem => elem.gender === gender);
}

console.log(task5(array,'female'));

function task6(arr) {                                  //Function for return arr with three elements
    return arr.slice(2,5);
}

console.log(task6(array));

function task7(arr, height) {                          //Function for filter on 'height'
    return arr.filter(elem => Number.parseInt(elem.height) !== Number.parseInt(height));
}

console.log(task7(array,'172'));

function task8(arr, skin_color) {                       //Function for search object ( return true/false)
    return arr.some(elem => elem.skin_color === skin_color);
}

console.log(task8(array,'white'));

function task9(arr) {                                  //Function for unification arrays
    return arr.concat([1,2,3,4,5]);
}
console.log(task9(array));

function task10(arr) {                                 //Function for sort on 'mass'
    return arr.map( elem => Number.parseInt(elem.mass)).sort((a, b) => a - b);
}

console.log(task10(array));

function task11(arr) {                                 //Function for unification array[obj] values in string
    return arr.map( elem => Object.values(elem).join('; '));
}

console.log(task11(array));

function task12(arr) {                                  //Function for sort on number values of array[obj]
    return arr.map( elem => Number.parseInt(elem.height) + Number.parseInt(elem.mass)).sort((a, b) => b - a);
}

console.log(task12(array));

function task13(arr) {                                  //Return array of arr[obj] values in array
    return arr.map( elem => Object.values(elem));
}

console.log(task13(array));

console.log(array); //Check on mutate
