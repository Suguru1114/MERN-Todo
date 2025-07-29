import express from "express";
import {deleteNotes, getAllNotes} from "../controllers/noteController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createAllNotes);
router.put("/:id", updateAllNotes);
router.delete("/:id", deleteNotes);

export default router;









