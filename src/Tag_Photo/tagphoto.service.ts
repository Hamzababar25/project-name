import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Photo, PhotoDocument } from "src/photo/photo.schema";
import { Tag, TagDocument } from "src/Tag/tag.schema";
import { CreateTagphotoDto } from "./tagphoto.controller";
import { Tagphoto, TagphotoDocument } from "./tagphoto.schema";




@Injectable()
export class TagphotoService {
  constructor(
    @InjectModel(Tagphoto.name) private readonly tagphotoModel: Model<TagphotoDocument>,
    @InjectModel(Tag.name) private readonly tagModel: Model<TagDocument>,
    @InjectModel(Photo.name) private readonly photoModel: Model<PhotoDocument>) {}

    async createtagphoto(createtagphotoDto:CreateTagphotoDto): Promise<Tagphoto> {
        const createdtagphoto = await this.tagphotoModel.create(createtagphotoDto);
        return createdtagphoto;
      }
      async findAll(): Promise<Tagphoto[]> {
        return this.tagphotoModel.find().exec();
      }
      async findOne(id: string): Promise<Tagphoto> {
        return this.tagphotoModel.findOne({ _id: id }).populate('tagid', '', this.tagModel).populate('lphotoid', '', this.photoModel).exec();
      }
      async delete(id: string) {
        const deletedmember = await this.tagphotoModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedmember;
      }
      async update({id,tagid,photoid}) {
        const updatedoc = await this.tagphotoModel
          .findByIdAndUpdate(id,{ tagid,photoid})
          .exec();
        return await this.findOne(updatedoc._id);
      }

  }