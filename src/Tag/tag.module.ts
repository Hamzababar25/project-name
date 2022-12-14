import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TagController } from "./tag.controller";
import { Tag, TagSchema } from "./tag.schema";
import { TagService } from "./tag.service";


@Module({
    imports: []
  })
  export class TagModule {}