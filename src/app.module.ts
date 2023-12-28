import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationSchema } from './location/location.entity';
import { CustomerSchema } from './customer/entities/customer.entity';
import { CustomerModule } from './customer/customer.module';
import { MenuSchema } from './menu/menu.entity';
import { MenuModule } from './menu/menu.module';
import { OrderSchema } from './order/order.entity';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sqlite.db',
      synchronize: true,
      entities: [LocationSchema, CustomerSchema, MenuSchema, OrderSchema],
      autoLoadEntities: true,
    }),
    LocationModule,
    CustomerModule,
    MenuModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
