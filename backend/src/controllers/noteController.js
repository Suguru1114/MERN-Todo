// const getAllNotes = (req, res) => {
//     res.status(200).send("you got 15 notes");
// };

export function getAllNotes(req, res){
    res.status(200).send("you got 15 notes");
}

export function createNote(req, res){
    res.status(200).json({message:"Note created successfully"});
}

export function updateNotes(req,res){
    res.status(200).json({message:"Note updated successfully"});
}

export function deleteNotes(req,res){
    res.status(200).json({message:"Note deleted successfully"});
}