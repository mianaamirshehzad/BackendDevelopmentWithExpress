// db.js
const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://maamirshehzadpk:admin123@cluster0.pmthapv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Our MongoDB connected successfully");
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
