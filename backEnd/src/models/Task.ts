import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { unique: true })
  name: string;

  @Column("varchar")
  description: string;

  @Column("date")
  startDate: Date;

  @Column("time")
  startTime: string;

  @Column("time")
  finishDate: Date;
}
