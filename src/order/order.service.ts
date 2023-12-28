import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderSchema } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderSchema)
    private ordersRepository: Repository<OrderSchema>,
  ) {}

  // async create(createOrderDto: CreateOrderDto): Promise<OrderSchema> {
  //   const order = new OrderSchema();
  //   let totalPrice = 0;

  //   for (let ii = 0; ii < createOrderDto.menu_id.length; ii++) {
  //     const menu = await this.menusRepository.findOne({
  //       where: { id: createOrderDto.menu_id[ii] },
  //     });

  //     const totalPriceMenu = menu.price * createOrderDto.quantity[ii];

  //     //   const orderMenu: OrderMenuEntityInterface = {
  //     //     menu_id: menu.id,
  //     //     price: menu.price,
  //     //     quantity: createOrderDto.quantity[ii],
  //     //     total_price_menu: totalPriceMenu,
  //     //   };

  //     order.total_price_menu.push(totalPriceMenu);
  //     totalPrice += totalPriceMenu;
  //   }

  //   order.total_price = totalPrice;

  //   const newOrder = this.ordersRepository.create(order);

  //   return await this.ordersRepository.save(newOrder);
  // }

  async create(createOrderDto: CreateOrderDto): Promise<OrderSchema> {
    return await this.ordersRepository.save(createOrderDto);
  }
}
