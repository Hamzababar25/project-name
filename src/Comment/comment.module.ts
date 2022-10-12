import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PhotoController } from "src/photo/photo.controller";
import { Photo, PhotoSchema } from "src/photo/photo.schema";
import { PhotoService } from "src/photo/photo.service";
import { CommentController } from "./comment.controller";
import { Comment, CommentSchema } from "./comment.schema";
import { CommentService } from "./comment.service";


@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema },{ name: Photo.name, schema: PhotoSchema }])],
    controllers: [CommentController,PhotoController],
    providers: [CommentService,PhotoService],
  })
  export class CommentModule {}