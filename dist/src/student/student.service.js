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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("./student.entity");
const typeorm_2 = require("typeorm");
let StudentService = exports.StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    findAll() {
        return this.studentRepository.find();
    }
    async findById(id) {
        const findOne = await this.studentRepository.findOne({ where: { id } });
        if (findOne == null) {
            throw new common_1.NotFoundException(`O estudante, cujo o identifcador é ${id}, não foi encontrado`);
        }
        return findOne;
    }
    async remove(id) {
        const findById = await this.findById(id);
        await this.studentRepository.remove(findById);
        return Object.assign(Object.assign({}, findById), { id });
    }
    async create(dto) {
        this.validate(dto);
        const newStudent = this.studentRepository.create(dto);
        return this.studentRepository.save(newStudent);
    }
    async update(dto) {
        await this.findById(dto.id);
        this.validate(dto);
        return this.studentRepository.save(dto);
    }
    validate(dto) {
        if (this.validMinAge(dto.datebirth.toString())) {
            throw new common_1.BadRequestException('O Aluno(a) a ser cadastrado deve possuir mais de 16 anos');
        }
        if (this.validMaxAge(dto.datebirth.toString())) {
            throw new common_1.BadRequestException('O Aluno(a) a ser cadastrado deve possuir menos de 76 anos');
        }
        if (this.validLenght(dto.name)) {
            throw new common_1.BadRequestException('Ao todo o nome e sobrenome do aluno(a) deve possuir mais de 5 letras');
        }
    }
    validMinAge(birthdate) {
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const year = day * 365;
        const value = new Date(birthdate);
        const now = new Date(Date.now());
        const diff = (now.getTime() / year - value.getTime() / year);
        if (diff < 16) {
            return true;
        }
        else {
            return false;
        }
    }
    validMaxAge(birthdate) {
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const year = day * 365;
        const value = new Date(birthdate);
        const now = new Date(Date.now());
        const diff = (now.getTime() / year - value.getTime() / year);
        if (diff > 76) {
            return true;
        }
        else {
            return false;
        }
    }
    validLenght(name) {
        const validation = name.length < 5 ? true : false;
        return validation;
    }
    async dashQttByCourse() {
        const qb = this.studentRepository.createQueryBuilder("students");
        qb.select("students.Course, count(*)")
            .groupBy("students.course");
        return await qb.getRawMany();
    }
    async dashQttByPhase() {
        const qb = this.studentRepository.createQueryBuilder("students");
        qb.select("students.phase, count(*)")
            .groupBy("students.phase");
        return await qb.getRawMany();
    }
    async dashQttByGender() {
        const qb = this.studentRepository.createQueryBuilder("students");
        qb.select("students.gender, count(*)")
            .groupBy("students.gender");
        return await qb.getRawMany();
    }
};
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.StudentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentService);
//# sourceMappingURL=student.service.js.map