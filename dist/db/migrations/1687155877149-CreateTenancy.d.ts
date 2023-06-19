import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateTenancy1687155877149 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
