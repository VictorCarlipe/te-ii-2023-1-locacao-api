import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLocal1687147495136 implements MigrationInterface {
    name = 'CreateLocal1687147495136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."locals_unity_enum" AS ENUM('I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII')`);
        await queryRunner.query(`CREATE TABLE "locals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "unity" "public"."locals_unity_enum", "lotation" integer NOT NULL, "attributes" character varying NOT NULL, CONSTRAINT "PK_56d0b7be926a53ceddcfe4abb1a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "locals"`);
        await queryRunner.query(`DROP TYPE "public"."locals_unity_enum"`);
    }

}
