const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hello, World! Welcome to Book Storez")
})
app.listen(PORT, () => {
    console.log(`Server listening to ${PORT}`);
});