import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MemberController } from "./member.controller";
import { Member, MemberSchema } from "./member.schema";
import { MemberService } from "./member.service";

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }])],
    controllers: [MemberController],
    providers: [MemberService],
  })
  export class MemberModule {}