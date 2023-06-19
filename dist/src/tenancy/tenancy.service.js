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
exports.TenancyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tenancy_entity_1 = require("./tenancy.entity");
const typeorm_2 = require("typeorm");
let TenancyService = exports.TenancyService = class TenancyService {
    constructor(tenancyRepository) {
        this.tenancyRepository = tenancyRepository;
        this.minute = 1000 * 60;
        this.hour = this.minute * 60;
        this.day = this.hour * 24;
        this.year = this.day * 365;
    }
    findAll() {
        return this.tenancyRepository.find();
    }
    async findById(id) {
        const findOne = await this.tenancyRepository.findOne({ where: { id } });
        if (findOne == null) {
            throw new common_1.NotFoundException(`O registro de locação, cujo o identificador é ${id}, não foi encontrado`);
        }
        return findOne;
    }
    async remove(id) {
        const findById = await this.findById(id);
        await this.tenancyRepository.remove(findById);
        return Object.assign(Object.assign({}, findById), { id });
    }
    async create(dto) {
        this.validate(dto);
        const newTenancy = this.tenancyRepository.create(dto);
        return this.tenancyRepository.save(newTenancy);
    }
    async update(dto) {
        await this.findById(dto.id);
        this.validate(dto);
        return this.tenancyRepository.save(dto);
    }
    validate(dto) {
        if (this.validInitialDate(dto.initialDate)) {
            throw new common_1.BadRequestException('Data inicial da locação é invalida');
        }
        ;
        if (this.validFinalDate(dto.finalDate, dto.initialDate)) {
            throw new common_1.BadRequestException('Data final da locação é invalida');
        }
    }
    validInitialDate(initialDate) {
        const inital = new Date(initialDate);
        const now = new Date(Date.now());
        if (inital.getTime() < (now.getTime() - 1 * this.day)) {
            return { invalidIntialDate: 'invaliDate' };
        }
        return null;
    }
    validFinalDate(finalDate, initialDate) {
        const inDate = new Date(initialDate);
        const fiDate = new Date(finalDate);
        if (fiDate.getTime() < inDate.getTime()) {
            return true;
        }
        return false;
    }
};
exports.TenancyService = TenancyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenancy_entity_1.TenancyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TenancyService);
//# sourceMappingURL=tenancy.service.js.map