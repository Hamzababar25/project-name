import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CommentController } from "./comment.controller";
import { Comment, CommentSchema } from "./comment.schema";
import { CommentService } from "./comment.service";


@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }])],
    controllers: [CommentController],
    providers: [CommentService],
  })
  export class CommentModule {}