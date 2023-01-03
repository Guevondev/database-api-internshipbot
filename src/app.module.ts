import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternshipModule } from './internship/internships.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    InternshipModule,
    MongooseModule.forRoot('mongodb+srv://root:1234@cluster0.ujd8iig.mongodb.net/internshipDB?retryWrites=true&w=majority'
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
