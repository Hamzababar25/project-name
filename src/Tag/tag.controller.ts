import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Tag } from "./tag.schema";
import { TagService } from "./tag.service";





export class CreateTagDto {
    Title: string;
   
    
   
  
  }

  @Controller('Tag')
export class TagController {
    constructor(private readonly tagService: TagService) {}

    @Post()
async create(@Body() createtagDto: CreateTagDto) {
   return this.tagService.createtag(createtagDto)

}
@Get()
  async findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }
@Get(':id')
async findOne(@Param('id') id: string): Promise<Tag> {
  return this.tagService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tagService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.tagService.update({id,...bd});
  }
}