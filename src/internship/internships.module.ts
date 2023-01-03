import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { InternshipSchema } from "./internship.model";
import { InternshipController } from "./internships.controller";
import { InternshipService } from "./internships.service";

@Module({
    controllers: [InternshipController],
    providers: [InternshipService],
    imports: [MongooseModule.forFeature([{name: 'Internship', schema: InternshipSchema}])]
})
export class InternshipModule {}