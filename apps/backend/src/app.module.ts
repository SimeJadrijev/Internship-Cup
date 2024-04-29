import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend', 'dist'),
    }),
    CitiesModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}