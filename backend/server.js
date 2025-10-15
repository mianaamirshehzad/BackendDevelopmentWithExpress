const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db.js");

const productRoutes = require("./routes/productRoutes.js")

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
dotenv.config();
connectDB();

// Middleware - allows to accept JSON data in the request body
app.use(express.json());

// Use product routes
app.use("/api", productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
