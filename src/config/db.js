import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        let dburl = "mongodb+srv://izzy678:Oyp3cS5cYVs07GGD@cluster0.4ysg0je.mongodb.net/LIBRARY"
        await mongoose.connect(dburl)
        console.log("Database connected successfully")
    } catch (error) {
         console.log(error, "Error connecting to Database")
    }
}

export default connectToDb