import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty({ message: 'Customer is required' })
  customer_id: number;

  @IsNotEmpty({ message: 'Menu is required' })
  menu_id: string[];

  @IsNotEmpty({ message: 'Quantity is required' })
  quantity: string[];
}
