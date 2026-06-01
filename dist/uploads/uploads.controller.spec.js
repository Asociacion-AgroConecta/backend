"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const uploads_controller_1 = require("./uploads.controller");
describe('UploadsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [uploads_controller_1.UploadsController],
        }).compile();
        controller = module.get(uploads_controller_1.UploadsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=uploads.controller.spec.js.map