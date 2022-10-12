import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateAlbumDto } from "./album.controller";
import { Album, AlbumDocument } from "./album.schema";



@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name) private readonly albumModel: Model<AlbumDocument>) {}

    async createalbum(createalbumDto:CreateAlbumDto): Promise<Album> {
        const createdalbum= await this.albumModel.create(createalbumDto);
        return createdalbum;
      }
      async findAll(): Promise<Album[]> {
        return this.albumModel.find().exec();
      }
      async findOne(id: string): Promise<Album> {
        return this.albumModel.findOne({ _id: id }).exec();
      }
      async delete(id: string) {
        const deletedmember = await this.albumModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedmember;
      }
      async update({id,Name,Phonenum,Email,Address,}) {
        const updatedoc = await this.albumModel
          .findByIdAndUpdate(id,{ Name,Phonenum,Email,Address })
          .exec();
        return await this.findOne(updatedoc._id);
      }

  }