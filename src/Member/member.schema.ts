import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


export type MemberDocument = Member & Document;

@Schema()
export class Member {

   

  @Prop()
 Name: string;

  @Prop()
  Phonenum: string;


  @Prop()
  Email: string;


  @Prop()
 Address: string;
  
  
  
  
 

  
}

export const MemberSchema = SchemaFactory.createForClass(Member);