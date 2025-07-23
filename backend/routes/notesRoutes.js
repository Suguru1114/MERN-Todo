import express from "express";

const router = express.Router();

router.get("/", (req,res) => {
    res.status(200).send("you got 15 notes");
});

router.post("/", (req,res) => {
    res.status(201).json({message:"post created succesfuly"});
});

router.put("/:id", (req, res) => {
    res.status(200).json({message:"post updated successfully"});
});

router.delete("/ :id", (req,res)=> {
    res.status(200).json({message:"Note deleted successfully"});
});

export default router;









