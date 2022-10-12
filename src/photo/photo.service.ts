import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Album, AlbumDocument } from "src/Album/album.schema";
import { Location, LocationDocument } from "src/Location/location.schema";
import { Member, MemberDocument } from "src/Member/member.schema";
import { CreatePhotoDto } from "./photo.controller";
import { Photo, PhotoDocument } from "./photo.schema";


@Injectable()
export class PhotoService {
  constructor(
    @InjectModel(Photo.name) private readonly photoModel: Model<PhotoDocument>,
    @InjectModel(Location.name) private readonly locationModel: Model<LocationDocument>,
    @InjectModel(Album.name) private readonly albumModel: Model<AlbumDocument>,
    @InjectModel(Member.name) private readonly memberModel: Model<MemberDocument>) {}

    async createphoto(createphotoDto:CreatePhotoDto): Promise<Photo> {
        const createdphoto = await this.photoModel.create(createphotoDto);
        return createdphoto;
      }
      async findAll(): Promise<Photo[]> {
        return this.photoModel.find().exec();
      }
      async findOne(id: string): Promise<Photo> {
        return this.photoModel.findOne({ _id: id }).populate('locationid', '', this.locationModel).populate('albumid', '',this.albumModel ).populate('memberid', '',this.memberModel ).exec();
      }
      async delete(id: string) {
        const deletedmember = await this.photoModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedmember;
      }
      async update({id,locationid, albumid, memberid,  Title,  Description,  Privacy,  UploadDate, View, ImagePath}) {
        const updatedoc = await this.photoModel
          .findByIdAndUpdate(id,{ locationid, albumid, memberid,  Title,  Description,  Privacy,  UploadDate, View, ImagePath })
          .exec();
        return await this.findOne(updatedoc._id);
      }

  }