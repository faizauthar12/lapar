import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCustomerDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name?: string;

  @IsString()
  phone_number?: string;

  @IsString()
  email?: string;
}
