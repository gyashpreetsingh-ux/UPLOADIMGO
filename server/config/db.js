const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        console.log("URI:", process.env.MONGODB_URI);

        await mongoose.connect(
  "mongodb+srv://gyashpreetsingh_db_user:Xtn7tl70y1PDiqNB@uploadimgo.n9eq7sq.mongodb.net/?retryWrites=true&w=majority&appName=UploadImgO"
);

        console.log("✅ MongoDB Connected");

    } catch (error) {

        console.log("❌ MongoDB Connection Failed");
        console.log(error);

        process.exit(1);
    }
};

module.exports = connectDB;