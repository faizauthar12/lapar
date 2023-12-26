import { IsNotEmpty, IsString } from 'class-validator';
import { LocationSchema } from 'src/location/location.entity';

export class CreateCustomerDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone_number: string;

  @IsNotEmpty({ message: 'Location is required' })
  location: LocationSchema;
}
