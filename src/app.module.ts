import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from "@nestjs/schedule";
import { MailListModule } from './mail-list/mail-list.module';

@Module({
  imports: [
    TweetsModule,
    MongooseModule.forRoot(
      'mongodb://root:root@db/analytics?authSource=admin',
      { useNewUrlParser: true },
    ),
    ScheduleModule.forRoot(),
    MailListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
