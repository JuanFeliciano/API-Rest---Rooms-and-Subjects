import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1705931180754 implements MigrationInterface {
    name = 'Default1705931180754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" RENAME COLUMN "descriptiom" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" RENAME COLUMN "description" TO "descriptiom"`);
    }

}
