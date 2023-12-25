import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locations')
export class LocationSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  latitude: string;

  @Column({ nullable: false })
  longitude: string;
}
