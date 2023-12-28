import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderSchema } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { MenuSchema } from 'src/menu/menu.entity';
import { CustomerSchema } from 'src/customer/entities/customer.entity';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderSchema)
    private ordersRepository: Repository<OrderSchema>,

    @InjectRepository(MenuSchema)
    private menusRepository: Repository<MenuSchema>,

    @InjectRepository(CustomerSchema)
    private customersRepository: Repository<CustomerSchema>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<OrderSchema> {
    const order = new OrderSchema();
    let totalPrice: number = 0;
    const menus: MenuSchema[] = [];

    const totalPriceMenus: string[] = [];
    const quantities: string[] = [];
    const menuIds: string[] = [];

    for (let ii = 0; ii < createOrderDto.menu_id.length; ii++) {
      const menu = await this.menusRepository.findOne({
        where: { id: createOrderDto.menu_id[ii] },
      });

      const totalPriceMenu = menu.price * createOrderDto.quantity[ii];

      totalPriceMenus.push(totalPriceMenu.toString());
      totalPrice += totalPriceMenu;

      quantities.push(createOrderDto.quantity[ii].toString());
      menus.push(menu);
      menuIds.push(createOrderDto.menu_id[ii].toString());
    }

    const customer = await this.customersRepository.findOne({
      where: { id: createOrderDto.customer_id },
    });

    Object.assign(order, {
      customerId: customer.id,
      menuId: menuIds,
      quantity: quantities,
      total_price_menu: totalPriceMenus,
      total_price: totalPrice,
      menu: menus,
      customer: customer,
    });

    const newOrder = this.ordersRepository.create(order);

    return await this.ordersRepository.save(newOrder);
  }

  async findAll(): Promise<OrderSchema[]> {
    return await this.ordersRepository.find();
  }

  async findOne(id: number): Promise<OrderSchema> {
    return await this.ordersRepository.findOne({
      where: { orderId: id },
    });
  }

  async update(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<OrderSchema> {
    const order = await this.findOne(id);

    let totalPrice: number = 0;
    const menus: MenuSchema[] = [];

    const totalPriceMenus: string[] = [];
    const quantities: string[] = [];
    const menuIds: string[] = [];

    for (let ii = 0; ii < updateOrderDto.menu_id.length; ii++) {
      const menu = await this.menusRepository.findOne({
        where: { id: updateOrderDto.menu_id[ii] },
      });

      const totalPriceMenu = menu.price * updateOrderDto.quantity[ii];

      totalPriceMenus.push(totalPriceMenu.toString());
      totalPrice += totalPriceMenu;

      quantities.push(updateOrderDto.quantity[ii].toString());
      menus.push(menu);
      menuIds.push(updateOrderDto.menu_id[ii].toString());
    }

    Object.assign(order, {
      customerId: order.customerId,
      menuId: menuIds,
      quantity: quantities,
      total_price_menu: totalPriceMenus,
      total_price: totalPrice,
      menu: menus,
      customer: order.customer,
    });

    return this.ordersRepository.save(order);
  }
}
