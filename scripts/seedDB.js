const mongoose = require("mongoose");
const db = require("../models");

//empties GoogleBooks collection and inserts the data below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks");


const googleSeed = [
    {
        authors: ["J.K. Rowling"],
        description: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
        image: "",
        link: "",
        title: ""
    }
]