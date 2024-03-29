import { CustomerSchema } from 'src/customer/entities/customer.entity';
import { MenuSchema } from 'src/menu/menu.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class OrderSchema {
  @PrimaryGeneratedColumn()
  public orderId: number;

  @Column()
  public customerId: number;

  @Column('simple-array', { nullable: true })
  public menuId: string[];

  @Column('simple-array')
  public quantity: string[];

  @Column('simple-array')
  public total_price_menu: string[];

  @Column()
  public total_price: number;

  @ManyToOne(() => CustomerSchema, (customer) => customer.orderSchema)
  public customer: CustomerSchema;

  @ManyToOne(() => MenuSchema, (menu) => menu.orderSchema)
  public menu: MenuSchema[];
}
