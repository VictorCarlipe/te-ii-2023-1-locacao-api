"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLocal1687147495136 = void 0;
class CreateLocal1687147495136 {
    constructor() {
        this.name = 'CreateLocal1687147495136';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."locals_unity_enum" AS ENUM('I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII')`);
        await queryRunner.query(`CREATE TABLE "locals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "unity" "public"."locals_unity_enum", "lotation" integer NOT NULL, "attributes" character varying NOT NULL, CONSTRAINT "PK_56d0b7be926a53ceddcfe4abb1a" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "locals"`);
        await queryRunner.query(`DROP TYPE "public"."locals_unity_enum"`);
    }
}
exports.CreateLocal1687147495136 = CreateLocal1687147495136;
//# sourceMappingURL=1687147495136-CreateLocal.js.map