import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private ordersService: OrderService) {}

  @Post()
  @ApiOperation({ summary: 'Create order' })
  async create(
    @Body() createOrderDto: CreateOrderDto,
    @Res() response: Response,
  ) {
    const order = await this.ordersService.create(createOrderDto);

    response.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      message: 'Order has been created successfully',
      data: order,
    });
  }
}
