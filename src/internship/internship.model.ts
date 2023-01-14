import mongoose from "mongoose";

export const InternshipSchema = new mongoose.Schema({
    author: {type: String, required: true},
    offer: {type: String, required: true},
    source: {type: String, required: true}, 
    createdAt: {type: Date, required: true},
    status: {type: Boolean, required: true}
})

InternshipSchema.methods.toJSON = function() {
    const { __v, status, ...internship } = this.toObject()
    return internship
}

interface Internship {
    id: string,
    author: string,
    offer: string,
    source: string,
    createdAt: Date
    status: boolean
}

export default Internship