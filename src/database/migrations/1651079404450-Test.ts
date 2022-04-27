import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1651079404450 implements MigrationInterface {
    name = 'Test1651079404450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "cavalo" (
                "id" SERIAL NOT NULL,
                "name" character varying(150) NOT NULL,
                "breed" character varying NOT NULL,
                CONSTRAINT "PK_aacad217d88944af91534b62bfa" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "cavalo"
        `);
    }

}
