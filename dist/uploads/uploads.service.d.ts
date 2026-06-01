export declare class UploadsService {
    private readonly uploadDir;
    constructor();
    findAll(): {
        filename: string;
        size: number;
        createdAt: Date;
    }[];
    remove(filename: string): {
        message: string;
        filename: string;
    };
}
