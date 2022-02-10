import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Model } from 'mongoose';
import { Tweet, TweetDocument } from './schemas/tweet.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet.name)
    private tweetModel: Model<TweetDocument>,
  ) {}

  create(createTweetDto: CreateTweetDto) {
    return this.tweetModel.create(createTweetDto);
  }

  findAll(
    { offset, limit }: { offset: number; limit: number } = {
      offset: 0,
      limit: 50,
    },
  ) {
    return this.tweetModel.find().skip(offset).limit(limit).exec();
  }

  findOne(id: string) {
    return this.tweetModel.findById(id).exec();
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
