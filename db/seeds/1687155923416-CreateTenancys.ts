import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTenancys1687155923416 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO tenancys (initial_date, final_date, objective, local_id, student_id) values
                ('2023-06-18', '2023-06-30', 'MON', '6edaa738-0b13-4c8e-aa13-d11c53ffd321', '2f04d5ec-4316-47e2-a716-9d4cebb09674')
        `);  
        await queryRunner.query(`
            INSERT INTO tenancys (initial_date, final_date, objective, local_id, student_id) values
                ('2023-06-18', '2023-07-30', 'MON', '6edaa738-0b13-4c8e-aa13-d11c53ffd321', 'c92de797-2f36-4457-899a-6ebfa4bd506c')
        `);   
        await queryRunner.query(`
            INSERT INTO tenancys (initial_date, final_date, objective, local_id, student_id) values
                ('2023-06-18', '2023-08-30', 'MON', '0b8318bb-18bb-4ac0-a10c-fe7ef41735e1', '40d475ba-bc03-48b5-885d-0ea38a12ec80')
        `);   
        await queryRunner.query(`
            INSERT INTO tenancys (initial_date, final_date, objective, local_id, student_id) values
                ('2023-06-18', '2023-09-30', 'MON', 'ff442364-b021-45d7-a5e3-862e4fb87747', 'd1d297a2-e60d-4bd2-a577-44f76af5ce27')
        `);   
        await queryRunner.query(`
            INSERT INTO tenancys (initial_date, final_date, objective, local_id, student_id) values
                ('2023-06-18', '2023-10-30', 'MON', '7d13defa-4024-43e0-8d39-1f000b631489', '2f62b556-9ca0-4a6d-8252-4c5f80e4c0d7')
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
