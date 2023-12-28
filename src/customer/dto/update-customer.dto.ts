import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCustomerDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  @ApiProperty({ example: 'John', description: 'Name of the customer' })
  name?: string;

  @IsString()
  @ApiProperty({
    example: '085155555',
    description: 'Phone number of the customer',
  })
  phone_number?: string;

  @IsString()
  @ApiProperty({
    example: 'John@doe.com',
    description: 'Email of the customer',
  })
  email?: string;
}
