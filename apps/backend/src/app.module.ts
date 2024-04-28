import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend', 'dist'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}