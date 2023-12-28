import { ApiProperty } from '@nestjs/swagger';
import { LocationSchema } from 'src/location/location.entity';
import { OrderSchema } from 'src/order/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('customers')
export class CustomerSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Pusspusss', description: 'Name of customer' })
  @Column({ nullable: false })
  name: string;

  @ApiProperty({
    example: '085555555',
    description: 'Phone number of customer',
  })
  @Column({ nullable: false })
  phone_number: string;

  @ApiProperty({
    example: 'lapar@gmail.com',
    description: 'Email of customer',
  })
  @Column({ nullable: false })
  email: string;

  @OneToOne(() => LocationSchema, { cascade: true })
  @JoinColumn()
  location: LocationSchema;

  @OneToMany(() => OrderSchema, (orderSchema) => orderSchema.customer)
  orderSchema: OrderSchema[];
}
