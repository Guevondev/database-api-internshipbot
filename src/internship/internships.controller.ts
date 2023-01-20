import { Controller, Post, Body, Get, Delete, Param, Query, Req } from "@nestjs/common";
import { InternshipService } from "./internships.service";
import { Request } from "express";
import { internshipNoID } from "../types";

@Controller('internships')
export class InternshipController {

    constructor(private readonly internshipService: InternshipService) {}

    @Post()
    addInternship(
        @Body('author') internAuthor: string,
        @Body('offer') internOffer: string,
        @Body('source') internSource: string,
        @Body('pass') pass: string = ''
    ): any {

        const createdAt = new Date()
        const intership: internshipNoID = { 
            author: internAuthor, 
            offer: internOffer, 
            source: internSource, 
            createdAt, 
            status: true
        }
        const generated = this.internshipService.insertInternship(
            intership,
            pass
        )
        return generated
    }

    @Get()
    getInternships(
        @Req() req: Request
    ) {
        const query = { 
            page: Number(req.query.page) || 1, 
            page_size: Number(req.query.page_size) || 10 
        }

        return this.internshipService.getInternships( query )
    }

    @Get(':id')
    getInternshipById(@Param('id') id: string) {
        return this.internshipService.getInternshipById(id)
    }

    @Delete('logic')
    logicDeleteInternship(
        @Body('pass') pass: string
    ) {
        return this.internshipService.logicDeleteInterships(pass)
    }

    @Delete()
    deleteInternship(
        @Body('pass') pass: string
    ) {
        return this.internshipService.deleteInternships(pass)
    }
}