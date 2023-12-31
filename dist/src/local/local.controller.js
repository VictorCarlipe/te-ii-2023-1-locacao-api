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
exports.LocalContoller = void 0;
const common_1 = require("@nestjs/common");
const local_service_1 = require("./local.service");
const local_dto_1 = require("./local.dto");
let LocalContoller = exports.LocalContoller = class LocalContoller {
    constructor(localService) {
        this.localService = localService;
    }
    findAll() {
        return this.localService.findAll();
    }
    async dashQttUnity() {
        return this.localService.dashQttUnity();
    }
    async findById(id) {
        return await this.localService.findById(id);
    }
    async remove(id) {
        return await this.localService.remove(id);
    }
    create(dto) {
        return this.localService.create(dto);
    }
    update(id, dto) {
        return this.localService.update(Object.assign(Object.assign({}, dto), { id }));
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocalContoller.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/dashQttUnity'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocalContoller.prototype, "dashQttUnity", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocalContoller.prototype, "findById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocalContoller.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_dto_1.LocalDto]),
    __metadata("design:returntype", void 0)
], LocalContoller.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, local_dto_1.LocalDto]),
    __metadata("design:returntype", void 0)
], LocalContoller.prototype, "update", null);
exports.LocalContoller = LocalContoller = __decorate([
    (0, common_1.Controller)('locals'),
    __metadata("design:paramtypes", [local_service_1.LocalService])
], LocalContoller);
//# sourceMappingURL=local.controller.js.map