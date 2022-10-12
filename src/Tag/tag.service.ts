import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateTagDto } from "./tag.controller";
import { Tag, TagDocument } from "./tag.schema";



@Injectable()
export class TagService {
  constructor(
    @InjectModel(Tag.name) private readonly tagModel: Model<TagDocument>) {}

    async createtag(createtagDto:CreateTagDto): Promise<Tag> {
        const createdtag = await this.tagModel.create(createtagDto);
        return createdtag;
      }
      async findAll(): Promise<Tag[]> {
        return this.tagModel.find().exec();
      }
      async findOne(id: string): Promise<Tag> {
        return this.tagModel.findOne({ _id: id }).exec();
      }
      async delete(id: string) {
        const deletedmember = await this.tagModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedmember;
      }
      async update({id,Title}) {
        const updatedoc = await this.tagModel
          .findByIdAndUpdate(id,{ Title})
          .exec();
        return await this.findOne(updatedoc._id);
      }

  }