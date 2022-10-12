import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LocationController } from "./location.controller";
import { Location, LocationSchema } from "./location.schema";
import { LocationService } from "./location.service";

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Location.name, schema: LocationSchema }])],
    controllers: [LocationController],
    providers: [LocationService],
  })
  export class LocationModule {}