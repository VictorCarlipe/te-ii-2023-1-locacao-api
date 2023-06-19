"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenancyEntity = void 0;
const typeorm_1 = require("typeorm");
const Objective_enum_1 = require("./Objective.enum");
const local_entity_1 = require("../local/local.entity");
const student_entity_1 = require("../student/student.entity");
let TenancyEntity = exports.TenancyEntity = class TenancyEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TenancyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'initial_date', nullable: false }),
    __metadata("design:type", Date)
], TenancyEntity.prototype, "initialDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'final_date', nullable: false }),
    __metadata("design:type", Date)
], TenancyEntity.prototype, "finalDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Objective_enum_1.ObjectiveEnum, default: Objective_enum_1.ObjectiveEnum.Atendimento, nullable: true }),
    __metadata("design:type", String)
], TenancyEntity.prototype, "objective", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], TenancyEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => local_entity_1.LocalEntity, (local) => local.tenancys, { eager: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'local_id',
        foreignKeyConstraintName: 'local_id',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", local_entity_1.LocalEntity)
], TenancyEntity.prototype, "local", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.StudentEntity, (student) => student.tenancys, { eager: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'student_id',
        foreignKeyConstraintName: 'student_id',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", student_entity_1.StudentEntity)
], TenancyEntity.prototype, "student", void 0);
exports.TenancyEntity = TenancyEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tenancys' })
], TenancyEntity);
//# sourceMappingURL=tenancy.entity.js.map