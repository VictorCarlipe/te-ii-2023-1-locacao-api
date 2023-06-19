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
exports.LocalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const local_entity_1 = require("./local.entity");
const typeorm_2 = require("typeorm");
let LocalService = exports.LocalService = class LocalService {
    constructor(localRepository) {
        this.localRepository = localRepository;
    }
    findAll() {
        return this.localRepository.find();
    }
    async findById(id) {
        const findOne = await this.localRepository.findOne({ where: { id } });
        if (findOne == null) {
            throw new common_1.NotFoundException(`O Local, cujo o identificador é ${id}, não foi encontrado`);
        }
        return findOne;
    }
    async remove(id) {
        const findById = await this.findById(id);
        await this.localRepository.remove(findById);
        return Object.assign(Object.assign({}, findById), { id });
    }
    async create(dto) {
        this.validate(dto);
        const newLocal = this.localRepository.create(dto);
        return this.localRepository.save(newLocal);
    }
    async update(dto) {
        await this.findById(dto.id);
        this.validate(dto);
        return this.localRepository.save(dto);
    }
    validate(dto) {
        if (this.validMinLotation(dto.lotation)) {
            throw new common_1.BadRequestException('A lotação minima para os locais da instituição é de 10');
        }
        if (this.validAttributes(dto.attributes)) {
            throw new common_1.BadRequestException('Houve um conflito de atributos. O mesmo local não pode possuir quadro tradicional e quadro branco');
        }
        if (this.validLength(dto.name)) {
            throw new common_1.BadRequestException('O nome do local deve possuir no mínimo 5 caracteres');
        }
    }
    validMinLotation(lotation) {
        return lotation < 10 ? true : false;
    }
    validAttributes(attribute) {
        const validLT = attribute.match('LT');
        const validQB = attribute.match('QB');
        const valid = validLT && validQB;
        return valid;
    }
    validLength(name) {
        return name.length < 5 ? true : false;
    }
    async dashQttUnity() {
        const qb = this.localRepository.createQueryBuilder("locals");
        qb.select("locals.unity, count(*)")
            .groupBy("locals.unity");
        return await qb.getRawMany();
    }
};
exports.LocalService = LocalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(local_entity_1.LocalEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LocalService);
//# sourceMappingURL=local.service.js.map