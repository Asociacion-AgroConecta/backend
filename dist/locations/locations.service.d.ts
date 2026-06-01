import { PrismaService } from '../prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
export declare class LocationsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    }[]>;
    create(data: CreateLocationDto): import("@prisma/client").Prisma.Prisma__LocationClient<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: CreateLocationDto): import("@prisma/client").Prisma.Prisma__LocationClient<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__LocationClient<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
