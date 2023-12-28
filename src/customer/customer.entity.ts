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

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  phone_number: string;

  @Column({ nullable: false })
  email: string;

  @OneToOne(() => LocationSchema, { cascade: true })
  @JoinColumn()
  location: LocationSchema;

  @OneToMany(() => OrderSchema, (orderSchema) => orderSchema.customer)
  orderSchema: OrderSchema[];
}
