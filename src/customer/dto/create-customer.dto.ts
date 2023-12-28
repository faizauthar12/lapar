import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { LocationSchema } from 'src/location/location.entity';

export class CreateCustomerDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  phone_number: string;

  @IsNotEmpty({ message: 'Location is required' })
  @ApiProperty()
  location: LocationSchema;
}
