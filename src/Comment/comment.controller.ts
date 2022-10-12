import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Photo } from "src/photo/photo.schema";
import { Comment } from "./comment.schema";
import { CommentService } from "./comment.service";





export class CreateCommentDto {
    photoid:Photo;
   Postdate: string;

    Content:string;
   
  
  }

  @Controller('Comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @Post()
async create(@Body() createcommentDto: CreateCommentDto) {
   return this.commentService.createcomment(createcommentDto)

}
@Get()
  async findAll(): Promise<Comment[]> {
    return this.commentService.findAll();
  }
@Get(':id')
async findOne(@Param('id') id: string): Promise<Comment> {
  return this.commentService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.commentService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.commentService.update({id,...bd});
  }
}