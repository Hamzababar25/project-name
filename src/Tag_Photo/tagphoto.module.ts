import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PhotoController } from "src/photo/photo.controller";
import { Photo, PhotoSchema } from "src/photo/photo.schema";
import { PhotoService } from "src/photo/photo.service";
import { TagController } from "src/Tag/tag.controller";
import { Tag, TagSchema } from "src/Tag/tag.schema";
import { TagService } from "src/Tag/tag.service";
import { TagphotoController } from "./tagphoto.controller";
import { Tagphoto, TagphotoSchema } from "./tagphoto.schema";
import { TagphotoService } from "./tagphoto.service";



@Module({
    imports: [],
  })
  export class TagphotoModule {}