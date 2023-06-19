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
exports.LocalEntity = void 0;
const typeorm_1 = require("typeorm");
const unity_enum_1 = require("./unity.enum");
const tenancy_entity_1 = require("../tenancy/tenancy.entity");
let LocalEntity = exports.LocalEntity = class LocalEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], LocalEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], LocalEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: unity_enum_1.UnityEnum, nullable: true }),
    __metadata("design:type", String)
], LocalEntity.prototype, "unity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', nullable: false }),
    __metadata("design:type", Number)
], LocalEntity.prototype, "lotation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], LocalEntity.prototype, "attributes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tenancy_entity_1.TenancyEntity, (tenancy) => tenancy.local),
    __metadata("design:type", Array)
], LocalEntity.prototype, "tenancys", void 0);
exports.LocalEntity = LocalEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'locals' })
], LocalEntity);
//# sourceMappingURL=local.entity.js.map