import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Slep {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'text', nullable: false, name: 'name' })
  name: string;
}
