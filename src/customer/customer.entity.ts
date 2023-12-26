import { LocationSchema } from 'src/location/location.entity';
import {
  Column,
  Entity,
  JoinColumn,
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
}
