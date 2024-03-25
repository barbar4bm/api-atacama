import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Category } from './category.entity';

@Entity()
export class Itemized {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'text', nullable: false, name: 'departure' })
  departure: string;

  @Column({ type: 'text', nullable: false, name: 'unit' })
  unit: string;

  @Column({ type: 'int', nullable: false, name: 'unit_price' })
  unitPrice: number;

  @Column({ name: 'id_category', type: 'uuid', nullable: true })
  @JoinColumn({ name: 'id_category' })
  @ManyToOne(() => Category)
  category: Category;
}
