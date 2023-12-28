import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locations')
export class LocationSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Jl.Kucing raya', description: 'Name of stret' })
  @Column({ nullable: false })
  address: string;

  @ApiProperty({
    example: 'Ini Rumah kucing',
    description: 'Name of te location',
  })
  @Column({ nullable: false })
  name: string;

  @ApiProperty({ example: '-06.12391231', description: 'Latitude' })
  @Column({ nullable: false })
  latitude: string;

  @ApiProperty({ example: '06.12391231', description: 'longitude' })
  @Column({ nullable: false })
  longitude: string;
}
