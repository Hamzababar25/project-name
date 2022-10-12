import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Photo } from 'src/photo/photo.schema';


export type CommentDocument = Comment& Document;

@Schema()
export class Comment {

   

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' })
    photoid: Photo;

  @Prop()
  Postdate: string;
  @Prop()
  Content: string;
 

  
}

export const CommentSchema = SchemaFactory.createForClass(Comment);