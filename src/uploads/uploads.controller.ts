import {
    Controller,
    Delete,
    Get,
    Param,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UploadsService } from './uploads.service';

@Controller('uploads')
export class UploadsController {

    constructor(private readonly uploadsService: UploadsService) { }

    @Get()
    findAll() {
        return this.uploadsService.findAll();
    }

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: 'uploads',
            filename: (_request, file, callback) => {
                const safeName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
                callback(null, `${Date.now()}-${safeName}`);
            },
        }),
    }))
    uploadFile(
        @UploadedFile() file: Express.Multer.File,
    ) {

        return {
            message: 'Archivo subido correctamente',
            storedName: file.filename,
            filename: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
        };
    }

    @Delete(':filename')
    remove(@Param('filename') filename: string) {
        return this.uploadsService.remove(filename);
    }
}
