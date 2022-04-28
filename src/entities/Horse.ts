import {
     Column,
     CreateDateColumn,
     Entity, 
     JoinColumn, 
     ManyToOne, 
     PrimaryGeneratedColumn 
} from "typeorm";
import { Breed } from "./Breed";

@Entity()
export class Horse {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 150,
    })
    name: string

    @ManyToOne(() => Breed, (breed) => breed.id)
    breed: Breed

    @CreateDateColumn()
    created_at: Date
}