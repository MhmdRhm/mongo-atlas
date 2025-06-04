const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

let counter = 0;

app.get('/', async (_, res) => {
    counter++;
    const User = mongoose.model('User', userSchema);

    const mora = new User({username: "Mohammad " + counter, email: "Mhdmrh@gmail.com", password: "kljdalsfjlads"});
    await mora.save();
    res.send(`<h1 style="text-align: center">${mora.username}</h1>`);
});


mongoose.connect("mongodb+srv://mhmdrhmit:learncode@cluster0.gs3a1.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    app.listen(3000);
});
