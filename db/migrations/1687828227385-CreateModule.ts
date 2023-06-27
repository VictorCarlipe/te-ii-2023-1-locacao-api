import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateModule1687828227385 implements MigrationInterface {
    name = 'CreateModule1687828227385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."students_course_enum" AS ENUM('adm', 'ccb', 'enf', 'edf', 'dir', 'psi', 'nut', 'sis')`);
        await queryRunner.query(`CREATE TYPE "public"."students_phase_enum" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8')`);
        await queryRunner.query(`CREATE TYPE "public"."students_gender_enum" AS ENUM('M', 'F', 'I')`);
        await queryRunner.query(`CREATE TABLE "students" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registration" integer NOT NULL, "name" character varying NOT NULL, "datebirth" date, "email" character varying, "phone" bigint, "course" "public"."students_course_enum" DEFAULT 'adm', "phase" "public"."students_phase_enum" DEFAULT '1', "gender" "public"."students_gender_enum" DEFAULT 'I', CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."tenancys_objective_enum" AS ENUM('MON', 'ATE', 'EVE', 'ENS', 'TRE', 'JOG', 'OUT')`);
        await queryRunner.query(`CREATE TABLE "tenancys" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "initial_date" date NOT NULL, "final_date" date NOT NULL, "objective" "public"."tenancys_objective_enum" DEFAULT 'ATE', "description" character varying, "local_id" uuid, "student_id" uuid, CONSTRAINT "PK_79435f68623098df5c561ec81eb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."locals_unity_enum" AS ENUM('I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII')`);
        await queryRunner.query(`CREATE TABLE "locals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "unity" "public"."locals_unity_enum", "lotation" integer NOT NULL, "attributes" character varying NOT NULL, CONSTRAINT "PK_56d0b7be926a53ceddcfe4abb1a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tenancys" ADD CONSTRAINT "local_id" FOREIGN KEY ("local_id") REFERENCES "locals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenancys" ADD CONSTRAINT "student_id" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tenancys" DROP CONSTRAINT "student_id"`);
        await queryRunner.query(`ALTER TABLE "tenancys" DROP CONSTRAINT "local_id"`);
        await queryRunner.query(`DROP TABLE "locals"`);
        await queryRunner.query(`DROP TYPE "public"."locals_unity_enum"`);
        await queryRunner.query(`DROP TABLE "tenancys"`);
        await queryRunner.query(`DROP TYPE "public"."tenancys_objective_enum"`);
        await queryRunner.query(`DROP TABLE "students"`);
        await queryRunner.query(`DROP TYPE "public"."students_gender_enum"`);
        await queryRunner.query(`DROP TYPE "public"."students_phase_enum"`);
        await queryRunner.query(`DROP TYPE "public"."students_course_enum"`);
    }

}
