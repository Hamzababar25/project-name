import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


export type TagDocument = Tag & Document;

@Schema()
export class Tag {

   

  @Prop()
 Title: string;

  
 

  
}

export const TagSchema = SchemaFactory.createForClass(Tag);