import * as dotenv from 'dotenv'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternshipModule } from './internship/internships.module';
import { MongooseModule } from '@nestjs/mongoose';

dotenv.config()

const db = process.env.uri!

@Module({
  imports: [
    InternshipModule,
    MongooseModule.forRoot( db )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
