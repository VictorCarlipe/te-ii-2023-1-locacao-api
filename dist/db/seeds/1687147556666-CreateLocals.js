"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLocals1687147556666 = void 0;
class CreateLocals1687147556666 {
    async up(queryRunner) {
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
    async down(queryRunner) {
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
exports.CreateLocals1687147556666 = CreateLocals1687147556666;
//# sourceMappingURL=1687147556666-CreateLocals.js.map