import express from "express"
import notesRoutes from "./routes/notesRouters.js";
// const express = require("express");

const app = express();

app.use("/api/notes", noteRoutes);
 

// app.get("/api/notes", (req, res) => {
//     res.status(200).send("you got 15 notes");
// });

// app.post("/api/notes", (req, res) => {
//     res.status(201).json({message:"post created successfully"});
// });

// app.put("/api/notes:id", (req, res) => {
//     res.status(200).json({message:"post updated successfully"});
// });

// app.delete("/api/notes:id", (req, res) => {
//     res.status(200).json({message:"Note deleted successfully"});
// });

app.listen(5001, ()=> {

    console.log("Server started on port 5001");
});