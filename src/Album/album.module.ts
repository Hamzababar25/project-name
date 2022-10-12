import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AlbumController } from "./album.controller";
import { Album, AlbumSchema } from "./album.schema";
import { AlbumService } from "./album.service";

@Module({
    imports: []
  })
  export class AlbumModule {}