import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TagController } from "./tag.controller";
import { Tag, TagSchema } from "./tag.schema";
import { TagService } from "./tag.service";


@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema }])],
    controllers: [TagController],
    providers: [TagService],
  })
  export class TagModule {}