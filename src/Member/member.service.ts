import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateMemberDto } from "./member.controller";
import { Member, MemberDocument } from "./member.schema";

@Injectable()
export class MemberService {
  constructor(
    @InjectModel(Member.name) private readonly memberModel: Model<MemberDocument>) {}

    async createmember(creatememberDto:CreateMemberDto): Promise<Member> {
        const createdmember = await this.memberModel.create(creatememberDto);
        return createdmember;
      }
      async findAll(): Promise<Member[]> {
        return this.memberModel.find().exec();
      }
      async findOne(id: string): Promise<Member> {
        return this.memberModel.findOne({ _id: id }).exec();
      }
      async delete(id: string) {
        const deletedmember = await this.memberModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedmember;
      }
      async update({id,Name,Phonenum,Email,Address,}) {
        const updatedoc = await this.memberModel
          .findByIdAndUpdate(id,{ Name,Phonenum,Email,Address })
          .exec();
        return await this.findOne(updatedoc._id);
      }

  }