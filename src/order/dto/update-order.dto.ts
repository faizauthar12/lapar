import { IsNotEmpty } from 'class-validator';

export class UpdateOrderDto {
  @IsNotEmpty({ message: 'Menu is required' })
  menu_id: number[];

  @IsNotEmpty({ message: 'Quantity is required' })
  quantity: number[];
}
