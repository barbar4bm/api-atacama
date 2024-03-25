import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Establishment {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'text', nullable: false, name: 'name' })
  name: string;

  @Column({ type: 'text', nullable: false, name: 'rbd' })
  rbd: string;

  @Column({ type: 'text', nullable: false, name: 'commune' })
  commune: string;
}
