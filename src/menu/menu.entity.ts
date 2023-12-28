import { OrderSchema } from 'src/order/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menu')
export class MenuSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  stock: number;

  @OneToMany(() => OrderSchema, (orderSchema) => orderSchema.menu)
  orderSchema: OrderSchema[];
}
