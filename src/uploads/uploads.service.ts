import { Injectable } from '@nestjs/common';
import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'fs';
import { basename, join } from 'path';

@Injectable()
export class UploadsService {
    private readonly uploadDir = join(process.cwd(), 'uploads');

    constructor() {
        if (!existsSync(this.uploadDir)) {
            mkdirSync(this.uploadDir, { recursive: true });
        }
    }

    findAll() {
        return readdirSync(this.uploadDir).map((filename) => {
            const fileStat = statSync(join(this.uploadDir, filename));

            return {
                filename,
                size: fileStat.size,
                createdAt: fileStat.birthtime,
            };
        });
    }

    remove(filename: string) {
        const safeFilename = basename(filename);

        rmSync(join(this.uploadDir, safeFilename), { force: true });

        return {
            message: 'Archivo eliminado correctamente',
            filename: safeFilename,
        };
    }
}
