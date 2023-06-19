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
exports.StudentDto = void 0;
const class_validator_1 = require("class-validator");
const course_enum_1 = require("./course.enum");
const gender_enum_1 = require("./gender.enum");
const phase_enum_1 = require("./phase.enum");
class StudentDto {
}
exports.StudentDto = StudentDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], StudentDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], StudentDto.prototype, "registration", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StudentDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], StudentDto.prototype, "datebirth", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], StudentDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], StudentDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(course_enum_1.CourseEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], StudentDto.prototype, "course", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(phase_enum_1.PhaseEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], StudentDto.prototype, "phase", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(gender_enum_1.GenderEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], StudentDto.prototype, "gender", void 0);
//# sourceMappingURL=student.dto.js.map