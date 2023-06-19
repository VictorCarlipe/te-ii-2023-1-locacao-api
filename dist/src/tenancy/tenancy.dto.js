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
exports.TenancyDto = void 0;
const class_validator_1 = require("class-validator");
const Objective_enum_1 = require("./Objective.enum");
const local_dto_1 = require("../local/local.dto");
const class_transformer_1 = require("class-transformer");
const student_dto_1 = require("../student/student.dto");
class TenancyDto {
}
exports.TenancyDto = TenancyDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TenancyDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], TenancyDto.prototype, "initialDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], TenancyDto.prototype, "finalDate", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(Objective_enum_1.ObjectiveEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TenancyDto.prototype, "objective", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TenancyDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => local_dto_1.LocalDto),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", local_dto_1.LocalDto)
], TenancyDto.prototype, "local", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => student_dto_1.StudentDto),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", student_dto_1.StudentDto)
], TenancyDto.prototype, "student", void 0);
//# sourceMappingURL=tenancy.dto.js.map