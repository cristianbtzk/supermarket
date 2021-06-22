import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Product } from './Product';

@Entity('offers')
export class Offer {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  product_id: string;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column('decimal')
  offer_price: number;

  @Column('timestamp with time zone')
  start_date: Date;

  @Column('timestamp with time zone')
  end_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
