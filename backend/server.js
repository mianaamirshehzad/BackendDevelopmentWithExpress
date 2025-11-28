const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");

const productRoutes = require("./routes/productRoutes.js")

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
dotenv.config();
connectDB();

// Middleware - allows to accept JSON data in the request body
app.use(express.json());

// Enabling Cross Origin Resource Sharing for all requrest
app.use(cors());

// Use product routes
app.use("/api", productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
