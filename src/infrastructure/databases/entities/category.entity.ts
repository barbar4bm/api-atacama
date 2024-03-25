import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Itemized } from './itemized.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'text', nullable: false, name: 'name' })
  name: string;

  @OneToMany(() => Itemized, (itemized) => itemized.category)
  itemized: Itemized[];
}
