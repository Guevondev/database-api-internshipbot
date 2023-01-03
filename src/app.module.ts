import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternshipModule } from './internship/internships.module';
import { MongooseModule } from '@nestjs/mongoose';
import dotenv from 'dotenv'

dotenv.config()

@Module({
  imports: [
    InternshipModule,
    MongooseModule.forRoot(
      process.env.uri
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
