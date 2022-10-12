import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AlbumController } from "./album.controller";
import { Album, AlbumSchema } from "./album.schema";
import { AlbumService } from "./album.service";

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }])],
    controllers: [AlbumController],
    providers: [AlbumService],
  })
  export class AlbumModule {}