import {
     Column,
     Entity, 
     PrimaryGeneratedColumn 
} from "typeorm";

@Entity()
export class Cavalo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 150,
    })
    name: string

    @Column()
    breed: string
}