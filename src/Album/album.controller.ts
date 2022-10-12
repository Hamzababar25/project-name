import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Album } from "./album.schema";
import { AlbumService } from "./album.service";




export class CreateAlbumDto {
    Title: string;
   
    Description: string;

    View:number;
   
  
  }

  @Controller('Album')
export class AlbumController {
    constructor(private readonly albumService: AlbumService) {}

    @Post()
async create(@Body() createalbumDto: CreateAlbumDto) {
   return this.albumService.createalbum(createalbumDto)

}
@Get()
  async findAll(): Promise<Album[]> {
    return this.albumService.findAll();
  }
@Get(':id')
async findOne(@Param('id') id: string): Promise<Album> {
  return this.albumService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.albumService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.albumService.update({id,...bd});
  }
}