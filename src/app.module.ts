import { Module } from '@nestjs/common';
import { AlbumController } from './Album/album.controller';
import { AlbumModule } from './Album/album.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [AlbumModule ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
