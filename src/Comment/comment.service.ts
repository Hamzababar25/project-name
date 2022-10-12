import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Photo, PhotoDocument } from "src/photo/photo.schema";
import { CreateCommentDto } from "./comment.controller";
import { Comment, CommentDocument } from "./comment.schema";



@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private readonly commentModel: Model<CommentDocument>,
    @InjectModel(Photo.name) private readonly photoModel: Model<PhotoDocument>) {}

    async createcomment(createcommentDto:CreateCommentDto): Promise<Comment> {
        const createdcomment = await this.commentModel.create(createcommentDto);
        return createdcomment;
      }
      async findAll(): Promise<Comment[]> {
        return this.commentModel.find().exec();
      }
      async findOne(id: string): Promise<Comment> {
        return this.commentModel.findOne({ _id: id }).populate('photoid', '', this.photoModel).exec();
      }
      async delete(id: string) {
        const deletedmember = await this.commentModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedmember;
      }
      async update({id,Postdate,Content}) {
        const updatedoc = await this.commentModel
          .findByIdAndUpdate(id,{ Postdate,Content})
          .exec();
        return await this.findOne(updatedoc._id);
      }

  }