import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderSchema } from 'src/order/order.entity';

@Entity('menu')
export class MenuSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Ovaltime', description: 'Name of the menu' })
  @Column({ nullable: false })
  name: string;

  @ApiProperty({
    example: 'Ovaltime choclatee',
    description: 'Description of the menu',
  })
  @Column({ nullable: false })
  description: string;

  @ApiProperty({ example: 10000, description: 'Price of the menu' })
  @Column({ nullable: false })
  price: number;

  @ApiProperty({ example: 10000, description: 'Stock of the menu' })
  @Column({ nullable: false })
  stock: number;

  @OneToMany(() => OrderSchema, (orderSchema) => orderSchema.menu)
  orderSchema: OrderSchema[];
}
