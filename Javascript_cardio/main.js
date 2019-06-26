/*
let datas = require('./datas.json')

[
    {
        "id": 1,
        "title": "Lorem",
        "categories": [ "Adipisicing", "Elit" ]
    },
    {
        "id": 2,    
        "title": "Ipsum",
        "categories": [ "Elit" ]
    },
    {
        "id": 3,
        "title": "Dolor",
        "categories": [ "Maxime", "Animi" ]
    },
    {
        "id": 4,
        "title": "Sit",
        "categories": [ "Minima" ]
    },
    {
        "id": 5,
        "title": "Amet",
        "categories": [ "Culpa" ]
    },
    {
        "id": 7,
        "title": "Architecto",
        "categories": [ "Culpa", "Maxime" ]
    },
    {
        "id": 8,
        "title": "Aliquam"
    },
    {
        "id": 9,
        "title": "Libero",
        "categories": [ "Maxime" , "Elit", "Neque" ]
    }
]


datas.push(
    {
        id: 6,
        title: "Consectetur",
        categories: ["Dignissimos"]
    }
)

const datasFilteredById = datas.filter((obj) => {
    return obj.id === 5
})
console.log(datasFilteredById);
*/

function printManyTimes(str) {
    "use strict";
    var sentence = str + "cool";
    sentence = str + "is amazing!"
    for(var i = 0; 1< str.length; i+=2) {
        console.log(sentence);
    }
}
printManyTimes("FreeCodeCamp");
console.log(printManyTimes);