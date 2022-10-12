import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { AlbumController } from './Album/album.controller';
import { AlbumModule } from './Album/album.module';
import { Album, AlbumSchema } from './Album/album.schema';
import { AlbumService } from './Album/album.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentController } from './Comment/comment.controller';
import { CommentModule } from './Comment/comment.module';
import { Comment, CommentSchema } from './Comment/comment.schema';
import { CommentService } from './Comment/comment.service';
import { LocationController } from './Location/location.controller';
import { LocationModule } from './Location/location.module';
import { Location, LocationSchema } from './Location/location.schema';
import { LocationService } from './Location/location.service';
import { MemberController } from './Member/member.controller';
import { MemberModule } from './Member/member.module';
import { Member, MemberSchema } from './Member/member.schema';
import { MemberService } from './Member/member.service';
import { PhotoController } from './photo/photo.controller';
import { PhotoModule } from './photo/photo.module';
import { Photo, PhotoSchema } from './photo/photo.schema';
import { PhotoService } from './photo/photo.service';
import { TagController } from './Tag/tag.controller';
import { TagModule } from './Tag/tag.module';
import { Tag, TagSchema } from './Tag/tag.schema';
import { TagService } from './Tag/tag.service';
import { TagphotoController } from './Tag_Photo/tagphoto.controller';
import { TagphotoModule } from './Tag_Photo/tagphoto.module';
import { Tagphoto, TagphotoSchema } from './Tag_Photo/tagphoto.schema';
import { TagphotoService } from './Tag_Photo/tagphoto.service';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
  MongooseModule.forFeature([{ name: Photo.name, schema: PhotoSchema },{ name: Member.name, schema: MemberSchema },{ name: Location.name, schema: LocationSchema },{ name: Album.name, schema: AlbumSchema },{ name: Tag.name, schema: TagSchema },{ name: Tagphoto.name, schema: TagphotoSchema },{ name: Comment.name, schema: CommentSchema }]
    ),
  //  AlbumModule,CommentModule,LocationModule,MemberModule,PhotoModule,TagModule,TagphotoModule ],
  MulterModule.register({
    dest: './files',
  })
],
  controllers: [AppController,PhotoController,MemberController,AlbumController,TagController,TagphotoController,LocationController,CommentController],
  providers: [AppService,PhotoService,TagService,TagphotoService,AlbumService,MemberService,CommentService,LocationService],
})
export class AppModule {}
