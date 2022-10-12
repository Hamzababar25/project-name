import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Location } from "./location.schema";
import { LocationService } from "./location.service";





export class CreateLocationDto {
    Name: string;
   
    Shortname: string;
   
  
  }

  @Controller('Location')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}

    @Post()
async create(@Body() createlocationDto: CreateLocationDto) {
   return this.locationService.createlocation(createlocationDto)

}
@Get()
  async findAll(): Promise<Location[]> {
    return this.locationService.findAll();
  }
@Get(':id')
async findOne(@Param('id') id: string): Promise<Location> {
  return this.locationService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.locationService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.locationService.update({id,...bd});
  }
}