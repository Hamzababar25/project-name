import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateLocationDto } from "./location.controller";
import { Location, LocationDocument } from "./location.schema";


@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name) private readonly locationModel: Model<LocationDocument>) {}

    async createlocation(createlocationDto:CreateLocationDto): Promise<Location> {
        const createdlocation = await this.locationModel.create(createlocationDto);
        return createdlocation;
      }
      async findAll(): Promise<Location[]> {
        return this.locationModel.find().exec();
      }
      async findOne(id: string): Promise<Location> {
        return this.locationModel.findOne({ _id: id }).exec();
      }
      async delete(id: string) {
        const deletedmember = await this.locationModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedmember;
      }
      async update({id,Name,Shortname}) {
        const updatedoc = await this.locationModel
          .findByIdAndUpdate(id,{ Name,Shortname })
          .exec();
        return await this.findOne(updatedoc._id);
      }

  }