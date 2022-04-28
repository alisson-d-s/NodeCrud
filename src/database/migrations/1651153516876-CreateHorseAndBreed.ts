import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateHorseAndBreed1651153516876 implements MigrationInterface {
    name = 'CreateHorseAndBreed1651153516876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "breed" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_d1c857f060076296ce8a87b9043" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "horse" (
                "id" SERIAL NOT NULL,
                "name" character varying(150) NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "breedId" integer,
                CONSTRAINT "PK_320c17594e65d9b7486bf4a7e41" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "horse"
            ADD CONSTRAINT "FK_5f7ef811982bf8db11d79b1d738" FOREIGN KEY ("breedId") REFERENCES "breed"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "horse" DROP CONSTRAINT "FK_5f7ef811982bf8db11d79b1d738"
        `);
        await queryRunner.query(`
            DROP TABLE "horse"
        `);
        await queryRunner.query(`
            DROP TABLE "breed"
        `);
    }

}
