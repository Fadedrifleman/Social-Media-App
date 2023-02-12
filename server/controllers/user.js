import User from "../models/User.js";

//READ
export const getUser = async(req, res)=> {
    try {
        const { id } = req.params.id;
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
