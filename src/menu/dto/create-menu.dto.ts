import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMenuDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty({ message: 'Price is required' })
  price: number;

  @IsNotEmpty({ message: 'Stock is required' })
  stock: number;
}
