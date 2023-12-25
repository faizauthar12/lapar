import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
