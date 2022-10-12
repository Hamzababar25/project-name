import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";


import { Member } from "./member.schema";
import { MemberService } from "./member.service";

export class CreateMemberDto {
    Name: string;
    Phonenum: number;
    Email: string;
    Address: string;
   
  
  }

  @Controller('Member')
export class MemberController {
    constructor(private readonly memberService: MemberService) {}

    @Post()
async create(@Body() creatememberDto: CreateMemberDto) {
   return this.memberService.createmember(creatememberDto)

}
@Get()
  async findAll(): Promise<Member[]> {
    return this.memberService.findAll();
  }
@Get(':id')
async findOne(@Param('id') id: string): Promise<Member> {
  return this.memberService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.memberService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.memberService.update({id,...bd});
  }
}