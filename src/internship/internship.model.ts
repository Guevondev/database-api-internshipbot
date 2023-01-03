import mongoose from "mongoose";

export const InternshipSchema = new mongoose.Schema({
    author: {type: String, required: true},
    offer: {type: String, required: true},
    source: {type: String, required: true}, 
    createdAt: {type: Date, required: true} 
})

interface Internship {
    id: string,
    author: string,
    offer: string,
    source: string,
    createdAt: Date
}

export default Internship