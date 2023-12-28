import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty({ message: 'Address is required' })
  @IsString()
  @ApiProperty()
  address: string;

  @IsNotEmpty({ message: 'Latitude is required' })
  @IsString()
  @ApiProperty()
  latitude: string;

  @IsNotEmpty({ message: 'Longitude is required' })
  @IsString()
  @ApiProperty()
  longitude: string;
}
