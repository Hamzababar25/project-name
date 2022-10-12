import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


export type LocationDocument = Location & Document;

@Schema()
export class Location {

   

  @Prop()
 Name: string;

  @Prop()
  Shortname: string;
  
 

  
}

export const LocationSchema = SchemaFactory.createForClass(Location);