import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCustomerDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  @ApiProperty()
  name?: string;

  @IsString()
  @ApiProperty()
  phone_number?: string;

  @IsString()
  @ApiProperty()
  email?: string;
}
