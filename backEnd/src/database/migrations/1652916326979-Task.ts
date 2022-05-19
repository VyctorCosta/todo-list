import { MigrationInterface, QueryRunner } from "typeorm";

export class Task1652916326979 implements MigrationInterface {
  name = "Task1652916326979";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "task" ADD CONSTRAINT "UQ_20f1f21d6853d9d20d501636ebd" UNIQUE ("name")`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "UQ_20f1f21d6853d9d20d501636ebd"`);
  }
}
