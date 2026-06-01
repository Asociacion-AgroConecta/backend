"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const uploads_service_1 = require("./uploads.service");
describe('UploadsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [uploads_service_1.UploadsService],
        }).compile();
        service = module.get(uploads_service_1.UploadsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=uploads.service.spec.js.map