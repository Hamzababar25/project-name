import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


export type AlbumDocument = Album & Document;

@Schema()
export class Album {

   

  @Prop()
 Title: string;

  @Prop()
  Description: string;
  @Prop()
  View: number;
 

  
}

export const AlbumSchema = SchemaFactory.createForClass(Album);