import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AlbumController } from "src/Album/album.controller";
import { Album, AlbumSchema } from "src/Album/album.schema";
import { AlbumService } from "src/Album/album.service";
import { LocationController } from "src/Location/location.controller";
import { Location, LocationSchema } from "src/Location/location.schema";
import { LocationService } from "src/Location/location.service";
import { MemberController } from "src/Member/member.controller";
import { Member, MemberSchema } from "src/Member/member.schema";
import { MemberService } from "src/Member/member.service";
import { PhotoController } from "./photo.controller";
import { Photo, PhotoSchema } from "./photo.schema";
import { PhotoService } from "./photo.service";


@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Photo.name, schema: PhotoSchema },{ name: Member.name, schema: MemberSchema },{ name: Location.name, schema: LocationSchema },{ name: Album.name, schema: AlbumSchema }])],
    controllers: [PhotoController,MemberController,LocationController,AlbumController],
    providers: [PhotoService,MemberService,AlbumService,LocationService],
  })
  export class PhotoModule {}