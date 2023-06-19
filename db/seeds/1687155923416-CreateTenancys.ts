import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTenancys1687155923416 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO tenancys (initial_date, final_date, objective, local_id, student_id) values
                ('2023-06-18', '2023-06-30', 'MON', 'f1776ab4-5e0a-4ff8-80cf-65818ff2e56f', '3d115a21-858d-486a-90a9-62295e586c43')
        `);  
        await queryRunner.query(`
            INSERT INTO tenancys (initial_date, final_date, objective, local_id, student_id) values
                ('2023-06-18', '2023-07-30', 'MON', 'fbada032-e3c1-46f1-8365-738ee63f0c30', 'ffd1d2a3-8d00-4eb0-a8c6-cd87ea3f461e')
        `);   
        await queryRunner.query(`
            INSERT INTO tenancys (initial_date, final_date, objective, local_id, student_id) values
                ('2023-06-18', '2023-08-30', 'MON', 'fc678a9d-154a-4667-a27d-1162e4d0ab77', '419549f3-a30f-4ab3-9090-71ec8e0b2a8c')
        `);   
        await queryRunner.query(`
            INSERT INTO tenancys (initial_date, final_date, objective, local_id, student_id) values
                ('2023-06-18', '2023-09-30', 'MON', '0f1d3e66-0abf-4110-8cae-166c708e2073', '9928c552-8278-4dc5-b17b-4a5fa121b3d7')
        `);   
        await queryRunner.query(`
            INSERT INTO tenancys (initial_date, final_date, objective, local_id, student_id) values
                ('2023-06-18', '2023-10-30', 'MON', 'd4aa6c74-8d15-46ac-9d0e-388647fbd01a', '8e025087-c2ac-47ed-afca-4d4eabd5f247')
        `);                                         
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM tenancys WHERE local_id = 'f1776ab4-5e0a-4ff8-80cf-65818ff2e56f' and student_id='3d115a21-858d-486a-90a9-62295e586c43'
        `);
        await queryRunner.query(`
            DELETE FROM tenancys WHERE local_id = 'fbada032-e3c1-46f1-8365-738ee63f0c30' and student_id='ffd1d2a3-8d00-4eb0-a8c6-cd87ea3f461e'
        `);   
        await queryRunner.query(`
            DELETE FROM tenancys WHERE local_id = 'fc678a9d-154a-4667-a27d-1162e4d0ab77' and student_id='419549f3-a30f-4ab3-9090-71ec8e0b2a8c'
        `);           
        await queryRunner.query(`
            DELETE FROM tenancys WHERE local_id = '0f1d3e66-0abf-4110-8cae-166c708e2073' and student_id='9928c552-8278-4dc5-b17b-4a5fa121b3d7'
        `);   
        await queryRunner.query(`
            DELETE FROM tenancys WHERE local_id = 'd4aa6c74-8d15-46ac-9d0e-388647fbd01a' and student_id='8e025087-c2ac-47ed-afca-4d4eabd5f247'
        `);                   
    }

}
