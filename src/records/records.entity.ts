import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  orderBy: {
    id: 'ASC',
  },
})
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  title: string;

  @Column()
  desc: string;
}
