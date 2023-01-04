import { Controller, Post, Body, Get, Delete } from "@nestjs/common";
import { InternshipService } from "./internships.service";

@Controller('internships')
export class InternshipController {

    constructor(private readonly internshipService: InternshipService) {}

    @Post()
    addInternship(
        @Body('author') internAuthor: string,
        @Body('offer') internOffer: string,
        @Body('source') internSource: string,
        @Body('pass') pass: string
    ): any {
        const createdAt = new Date()
        const generated = this.internshipService.insertInternship(
            internAuthor,
            internOffer,
            internSource,
            createdAt,
            true,
            pass
        )
        return generated
    }

    @Get()
    getInternships() {
        return this.internshipService.getInternships()
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