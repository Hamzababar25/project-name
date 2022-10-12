import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Album } from 'src/Album/album.schema';
import { Location} from 'src/Location/location.schema';
import { Member } from 'src/Member/member.schema';


export type PhotoDocument = Photo & Document;

@Schema()
export class Photo {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Location' })
    locationid: Location;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Album' })
     albumid: Album;

     @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Member' })
     memberid: Member;

  @Prop()
  Title: string;

  @Prop()
  Description: string;


  @Prop()
  Privacy: string;


  @Prop()
    UploadDate: string;
  
    @Prop()
    View: number;

    @Prop()
   ImagePath: string;
  
  
  
  
  
 

  
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);