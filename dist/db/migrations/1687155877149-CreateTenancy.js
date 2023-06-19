"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTenancy1687155877149 = void 0;
class CreateTenancy1687155877149 {
    constructor() {
        this.name = 'CreateTenancy1687155877149';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."tenancys_objective_enum" AS ENUM('MON', 'EVE', 'JOG', 'ATE')`);
        await queryRunner.query(`CREATE TABLE "tenancys" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "initial_date" date NOT NULL, "final_date" date NOT NULL, "objective" "public"."tenancys_objective_enum" DEFAULT 'ATE', "description" character varying, "local_id" uuid, "student_id" uuid, CONSTRAINT "PK_79435f68623098df5c561ec81eb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tenancys" ADD CONSTRAINT "local_id" FOREIGN KEY ("local_id") REFERENCES "locals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tenancys" ADD CONSTRAINT "student_id" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tenancys" DROP CONSTRAINT "student_id"`);
        await queryRunner.query(`ALTER TABLE "tenancys" DROP CONSTRAINT "local_id"`);
        await queryRunner.query(`DROP TABLE "tenancys"`);
        await queryRunner.query(`DROP TYPE "public"."tenancys_objective_enum"`);
    }
}
exports.CreateTenancy1687155877149 = CreateTenancy1687155877149;
//# sourceMappingURL=1687155877149-CreateTenancy.js.map