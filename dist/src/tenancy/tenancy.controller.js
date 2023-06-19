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
exports.TenancysController = void 0;
const common_1 = require("@nestjs/common");
const tenancy_service_1 = require("./tenancy.service");
const tenancy_dto_1 = require("./tenancy.dto");
let TenancysController = exports.TenancysController = class TenancysController {
    constructor(tenancyService) {
        this.tenancyService = tenancyService;
    }
    findAll() {
        return this.tenancyService.findAll();
    }
    async findById(id) {
        return await this.tenancyService.findById(id);
    }
    async remove(id) {
        return await this.tenancyService.remove(id);
    }
    create(dto) {
        return this.tenancyService.create(dto);
    }
    update(id, dto) {
        return this.tenancyService.update(Object.assign(Object.assign({}, dto), { id }));
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TenancysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenancysController.prototype, "findById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenancysController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tenancy_dto_1.TenancyDto]),
    __metadata("design:returntype", void 0)
], TenancysController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tenancy_dto_1.TenancyDto]),
    __metadata("design:returntype", void 0)
], TenancysController.prototype, "update", null);
exports.TenancysController = TenancysController = __decorate([
    (0, common_1.Controller)('tenancys'),
    __metadata("design:paramtypes", [tenancy_service_1.TenancyService])
], TenancysController);
//# sourceMappingURL=tenancy.controller.js.map