import { Injectable } from "@nestjs/common";
import Internship from "./internship.model";
import { InjectModel } from '@nestjs/mongoose'
import { Model } from "mongoose";

@Injectable()
export class InternshipService {

    constructor(@InjectModel('Internship') private readonly internshipModel: Model<Internship>) {}

    async insertInternship(author: string, description: string, origin: string, createdAt: Date) {
        const newInternship = new this.internshipModel({
            author,
            description,
            origin,
            createdAt
        })
        const response = await newInternship.save()
        console.log(response)
        return response
    }

    async getInternships() {
        return await this.internshipModel.find()
    }

    async deleteIntership(entryId) {
        await this.internshipModel.deleteOne( { _id: entryId})
    }
}