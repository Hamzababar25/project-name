import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Photo } from "src/photo/photo.schema";
import { Tag } from "src/Tag/tag.schema";
import { Tagphoto } from "./tagphoto.schema";
import { TagphotoService } from "./tagphoto.service";





export class CreateTagphotoDto {
    tagid:Tag;
    photoid:Photo;
   
    
   
  
  }

  @Controller('Tagphoto')
export class TagphotoController {
    constructor(private readonly tagphotoService: TagphotoService) {}

    @Post()
async create(@Body() createtagphotoDto: CreateTagphotoDto) {
   return this.tagphotoService.createtagphoto(createtagphotoDto)

}
@Get()
  async findAll(): Promise<Tagphoto[]> {
    return this.tagphotoService.findAll();
  }
@Get(':id')
async findOne(@Param('id') id: string): Promise<Tagphoto> {
  return this.tagphotoService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tagphotoService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.tagphotoService.update({id,...bd});
  }
}