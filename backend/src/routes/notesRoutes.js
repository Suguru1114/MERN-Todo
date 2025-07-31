import express from "express";
import {deleteNote, getAllNotes, createNote, updateNote} from "../controllers/noteController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;









