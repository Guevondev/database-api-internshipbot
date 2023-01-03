import { Controller, Post, Body, Get, Delete } from "@nestjs/common";
import { InternshipService } from "./internships.service";

@Controller('internships')
export class InternshipController {

    constructor(private readonly internshipService: InternshipService) {}

    @Post()
    addInternship(
        @Body('author') internAuthor: string,
        @Body('offer') internOffer: string,
        @Body('origin') internOrigin: string
    ): any {
        const createdAt = new Date()
        const generated = this.internshipService.insertInternship(
            internAuthor,
            internOffer,
            internOrigin,
            createdAt
        )
        return generated
    }

    @Get()
    getInternships() {
        return this.internshipService.getInternships()
    }

    // @Delete()
    // deleteInternship() {
    //     try{
    //         this.internshipService.deleteIntership()
    //         return 'deleted internship'
    //     }
    // }
}