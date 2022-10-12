import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Photo } from 'src/photo/photo.schema';
import { Tag } from 'src/Tag/tag.schema';


export type TagphotoDocument = Tagphoto & Document;

@Schema()
export class Tagphoto {

   

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' })
     tagid:Tag;

     @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' })
     photoid:Photo;


  
 

  
}

export const TagphotoSchema = SchemaFactory.createForClass(Tagphoto);