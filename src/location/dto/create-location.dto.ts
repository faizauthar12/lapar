import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Address is required' })
  @IsString()
  address: string;

  @IsNotEmpty({ message: 'Latitude is required' })
  @IsString()
  latitude: string;

  @IsNotEmpty({ message: 'Longitude is required' })
  @IsString()
  longitude: string;
}
