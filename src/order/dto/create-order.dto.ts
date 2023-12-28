import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty({ message: 'Customer is required' })
  @ApiProperty({ example: 1, description: 'customer id' })
  customer_id: number;

  @IsNotEmpty({ message: 'Menu is required' })
  @ApiProperty({ example: [1, 2, 4], description: 'menu id' })
  menu_id: number[];

  @IsNotEmpty({ message: 'Quantity is required' })
  @ApiProperty({ example: [1, 1, 1], description: 'menu quantities' })
  quantity: number[];
}
