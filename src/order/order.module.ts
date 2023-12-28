import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderSchema } from './order.entity';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { CustomerSchema } from 'src/customer/entities/customer.entity';
import { MenuSchema } from 'src/menu/menu.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderSchema, CustomerSchema, MenuSchema]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
