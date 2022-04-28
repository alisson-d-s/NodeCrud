import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Breed {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    name: string

    @CreateDateColumn()
    created_at: Date
}