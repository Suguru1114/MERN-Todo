import mongoose from "mongoose";

export const connectDB = async () => {

    try {
        await mongoose.connect(
        "mongodb+srv://suguru1114:smC4M38o2vb18sXO@cluster0.erabv3p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("MangoDB CONNEACTED SUCCESSFULLY!!!");
    } catch (error) {
        console.error("Error connectiong to MANGODB", error);
    }
};