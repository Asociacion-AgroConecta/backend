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
exports.UploadsService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
let UploadsService = class UploadsService {
    uploadDir = (0, path_1.join)(process.cwd(), 'uploads');
    constructor() {
        if (!(0, fs_1.existsSync)(this.uploadDir)) {
            (0, fs_1.mkdirSync)(this.uploadDir, { recursive: true });
        }
    }
    findAll() {
        return (0, fs_1.readdirSync)(this.uploadDir).map((filename) => {
            const fileStat = (0, fs_1.statSync)((0, path_1.join)(this.uploadDir, filename));
            return {
                filename,
                size: fileStat.size,
                createdAt: fileStat.birthtime,
            };
        });
    }
    remove(filename) {
        const safeFilename = (0, path_1.basename)(filename);
        (0, fs_1.rmSync)((0, path_1.join)(this.uploadDir, safeFilename), { force: true });
        return {
            message: 'Archivo eliminado correctamente',
            filename: safeFilename,
        };
    }
};
exports.UploadsService = UploadsService;
exports.UploadsService = UploadsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UploadsService);
//# sourceMappingURL=uploads.service.js.map