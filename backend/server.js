const express = require("express");
const dotenv = require("dotenv");

const app = express();
const PORT = 5000;

dotenv.config();
console.log("Environment Variables Loaded", process.env.MONGO_URL);
app.get("/", (req, res) => {
    res.send("Hello, World! Welcome to Book Storez")
})
app.listen(PORT, () => {
    console.log(`Server listening to ${PORT}`);
});