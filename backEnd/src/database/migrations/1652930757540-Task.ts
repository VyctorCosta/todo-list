import { MigrationInterface, QueryRunner } from "typeorm";

export class Task1652930757540 implements MigrationInterface {
  name = "Task1652930757540";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "taskDuration" TO "finishDate"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "finishDate" TO "taskDuration"`);
  }
}
