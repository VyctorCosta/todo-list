import {MigrationInterface, QueryRunner} from "typeorm";

export class Task1652942382794 implements MigrationInterface {
    name = 'Task1652942382794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "finishTime" TIME NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "finishDate"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "finishDate" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "finishDate"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "finishDate" TIME NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "finishTime"`);
    }

}
