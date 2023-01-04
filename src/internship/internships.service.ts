import { Injectable } from "@nestjs/common";
import Internship from "./internship.model";
import { InjectModel } from '@nestjs/mongoose'
import { Model } from "mongoose";
import * as bcrypt from 'bcrypt'
import { last } from "rxjs";
import e from "express";

const moMil = 2592000000 // month time in miliseconds
const encryptPass = '$2b$08$HtM2FdIPKL166S89z7cgSOn5BA8jmKOFG5UZjy6j7I1kBb.WF1bge'
const isValid = async (pass: string) => {
    return await bcrypt.compare(pass, encryptPass)
}
@Injectable()
export class InternshipService {

    constructor(@InjectModel('Internship') private readonly internshipModel: Model<Internship>) {}

    async insertInternship(author: string, offer: string, source: string, createdAt: Date, status: boolean, pass: string) {
        const prevInternship = await this.internshipModel.find({ offer })
        const valid = await isValid(pass)

        try{
            if ( !valid )
                return { msg: "Invalid password"}
        } catch (err) {
            return { msg: 'pass not valid'}
        }

        if ( Object.keys(prevInternship).length !== 0 )
            return { msg: "Ya existe esta oferta" }       

        const newInternship = new this.internshipModel({
            author,
            offer,
            source,
            status,
            createdAt
        })

        const response = await newInternship.save()
        console.log(response)
        return response
    }

    async getInternships() {
        return await this.internshipModel.find()
    }

    async logicDeleteInterships(pass: string) {
        const valid = await isValid(pass)

        try{
            if ( !valid )
                return { msg: "Invalid password"}
        } catch (err) {
            return { msg: 'pass not valid'}
        }

        const nowDate = new Date()
        const lastDate = new Date(nowDate.getTime() - moMil)
        const twoMoDate = new Date(lastDate.getTime() - moMil * 2)
        await this.internshipModel.updateMany({
            createdAt: {
                $gte: twoMoDate,
                $lte: lastDate
            }
        }, {
            status: false
        })

        return { msg: 'disabled internships' }
    }

    async deleteInternships(pass: string) {
        const valid = await isValid(pass)

        try{
            if ( !valid )
                return { msg: "Invalid password"}
        } catch (err) {
            return { msg: 'pass not valid'}
        }
        
        const nowDate = new Date()
        const twoMoDate = new Date(nowDate.getTime() - moMil * 2)
        const threeMoDate = new Date(twoMoDate.getTime() - moMil * 3)

        await this.internshipModel.deleteMany({
            createdAt: {
                $gte: threeMoDate,
                $lte: twoMoDate
            }
        })

        return { msg: 'deleted internships' }
    }
}