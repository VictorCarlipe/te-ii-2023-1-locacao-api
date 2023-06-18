import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStudent1687120523757 implements MigrationInterface {
    name = 'CreateStudent1687120523757'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."students_course_enum" AS ENUM('adm', 'ccb', 'enf', 'edf', 'dir', 'psi', 'nut', 'sis')`);
        await queryRunner.query(`CREATE TYPE "public"."students_phase_enum" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8')`);
        await queryRunner.query(`CREATE TYPE "public"."students_gender_enum" AS ENUM('M', 'F', 'I')`);
        await queryRunner.query(`CREATE TABLE "students" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registration" integer NOT NULL, "name" character varying NOT NULL, "datebirth" date, "email" character varying, "phone" character varying, "course" "public"."students_course_enum" DEFAULT 'adm', "phase" "public"."students_phase_enum" DEFAULT '1', "gender" "public"."students_gender_enum" DEFAULT 'I', CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "students"`);
        await queryRunner.query(`DROP TYPE "public"."students_gender_enum"`);
        await queryRunner.query(`DROP TYPE "public"."students_phase_enum"`);
        await queryRunner.query(`DROP TYPE "public"."students_course_enum"`);
    }

}
