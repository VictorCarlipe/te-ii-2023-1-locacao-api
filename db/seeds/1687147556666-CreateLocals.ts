import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateLocals1687147556666 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO locals (name, lotation, unity, attributes) values
                ('Laboratório 05', 35, 'IV', 'OP-MP-MA-QB')
        `);
        await queryRunner.query(`
            INSERT INTO locals (name, lotation, unity, attributes) values
                ('Sala 21b', 48, 'II', 'MP-OC-LT')
        `);
        await queryRunner.query(`
            INSERT INTO locals (name, lotation, unity, attributes) values
                ('Sala 14c', 20, 'V', 'OC-QB')
        `);
        await queryRunner.query(`
            INSERT INTO locals (name, lotation, unity, attributes) values
                ('Laboratório 03', 36, 'IV', 'OP-MP-MA-QB')
        `);
        await queryRunner.query(`
            INSERT INTO locals (name, lotation, unity, attributes) values
                ('Quebra Poliesportiva', 44, 'VII', '-')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM locals WHERE name = 'Laboratório 05'
        `);

        await queryRunner.query(`
            DELETE FROM locals WHERE name = 'Sala 21b'
        `);

        await queryRunner.query(`
            DELETE FROM locals WHERE name = 'Sala 14c'
        `);

        await queryRunner.query(`
            DELETE FROM locals WHERE name = 'Laboratório 03'
        `);

        await queryRunner.query(`
            DELETE FROM locals WHERE name = 'Quebra Poliesportiva'
        `);
    }

}
