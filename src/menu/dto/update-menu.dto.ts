import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateMenuDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  @ApiProperty({ example: 'Ovaltime', description: 'Name of the menu' })
  name?: string;

  @IsString()
  @ApiProperty({
    example: 'Ovaltime choclatee',
    description: 'Description of the menu',
  })
  description?: string;

  @IsNotEmpty({ message: 'Price is required' })
  @ApiProperty({ example: 10000, description: 'Price of the menu' })
  price?: number;

  @IsNotEmpty({ message: 'Stock is required' })
  @ApiProperty({ example: 10000, description: 'Stock of the menu' })
  stock?: number;
}
