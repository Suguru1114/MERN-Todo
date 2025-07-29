// const getAllNotes = (req, res) => {
//     res.status(200).send("you got 15 notes");
// };

export function getAllNotes(req, res){
    res.status(200).send("you got 15 notes");
}

export function createNote(req, res){
    res.status(200).json({message:"Note created successfully"});
}