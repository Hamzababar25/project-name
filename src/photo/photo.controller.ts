import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { Album } from "src/Album/album.schema";
import { Location } from "src/Location/location.schema";
import { Member } from "src/Member/member.schema";
import { UploadFile } from "src/utils/file-uploading.utils";
import { Photo } from "./photo.schema";
import { PhotoService } from "./photo.service";



export class CreatePhotoDto {
   locationid: Location;
    albumid: Album;
    memberid: Member;
    Title: string;
    Description: string;
    Privacy: string;
      UploadDate: string;
      View: number;
     ImagePath: string;
   
  
  }

  @Controller('Photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}

    @Post()
async create(@Body() createphotoDto: CreatePhotoDto) {
   return this.photoService.createphoto(createphotoDto)

}
@Get()
  async findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }
@Get(':id')
async findOne(@Param('id') id: string): Promise<Photo> {
  return this.photoService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.photoService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.photoService.update({id,...bd});
  }












  @Post('single')
  @UseInterceptors(
    FileInterceptor('image'),
  )
  async uploadedFile(@UploadedFile() file) {
      const response = await UploadFile(file)
      console.log(file)
      return response;
  }


  /// this is how you upload single file 



//   @Post('multiple')
// @UseInterceptors(
//   FilesInterceptor('image', 20)
// )
// async uploadMultipleFiles(@UploadedFiles() files) {
//   const response = [];
//   files.forEach(file => {
//     const fileReponse = {
//       originalname: file.originalname,
//       filename: file.filename,
//     };
//     response.push(fileReponse);
//   });
//   return response;
// }



}