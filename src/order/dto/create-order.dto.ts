import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty({ message: 'Customer is required' })
  customer_id: number;

  @IsNotEmpty({ message: 'Menu is required' })
  menu_id: number[];

  @IsNotEmpty({ message: 'Quantity is required' })
  quantity: number[];
}