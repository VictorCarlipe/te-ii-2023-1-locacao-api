import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateStudent1687101537494 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO students (registration, name, datebirth, email, phone, course, phase, gender) values
                (738750923, 'Pedro da Silva', '2002-01-01', 'pedro.silva@outlook.com', '48991919191', 'adm', '1', 'M')
        `);

        await queryRunner.query(`
            INSERT INTO students (registration, name, datebirth, email, phone, course, phase, gender) values
                (181469111, 'Priscila Peixoto', '1998-04-16', 'priscila.peixoto@gmail.com', '48995959595', 'ccb', '3', 'F')
        `);

        await queryRunner.query(`
            INSERT INTO students (registration, name, datebirth, email, phone, course, phase, gender) values
                (887329240, 'Rosimar Floriano', '1996-11-03', 'rosimar.flori@gmail.com', '48997979797', 'sis', '7', 'M')
        `);

        await queryRunner.query(`
            INSERT INTO students (registration, name, datebirth, email, phone, course, phase, gender) values
                (974099599, 'Cristine Amaral', '1988-09-27', 'cris.amaral@hotmail.com', '48998989898', 'enf', '4', 'F')
        `);

        await queryRunner.query(`
            INSERT INTO students (registration, name, datebirth, email, phone, course, phase, gender) values
                (676545236, 'Mariana Constantine', '1999-02-25', 'mari.constantine@hotmail.com', '48992929292', 'psi', '5', 'F')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM students WHERE registration = 738750923
        `)
        await queryRunner.query(`
            DELETE FROM students WHERE registration = 181469111
        `)
        await queryRunner.query(`
            DELETE FROM students WHERE registration = 887329240
        `)
        await queryRunner.query(`
            DELETE FROM students WHERE registration = 974099599
        `)
        await queryRunner.query(`
            DELETE FROM students WHERE registration = 676545236
        `)
    }

}
