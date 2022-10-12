import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MemberController } from "./member.controller";
import { Member, MemberSchema } from "./member.schema";
import { MemberService } from "./member.service";

@Module({
    imports: []
  })
  export class MemberModule {}