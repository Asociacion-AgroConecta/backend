import { UploadsService } from './uploads.service';
export declare class UploadsController {
    private readonly uploadsService;
    constructor(uploadsService: UploadsService);
    findAll(): {
        filename: string;
        size: number;
        createdAt: Date;
    }[];
    uploadFile(file: Express.Multer.File): {
        message: string;
        storedName: string;
        filename: string;
        mimetype: string;
        size: number;
    };
    remove(filename: string): {
        message: string;
        filename: string;
    };
}
