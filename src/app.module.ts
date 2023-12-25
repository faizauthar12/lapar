import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationSchema } from './location/location.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sqlite.db',
      synchronize: true,
      entities: [LocationSchema],
      autoLoadEntities: true,
    }),
    LocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
