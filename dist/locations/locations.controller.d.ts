import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    }[]>;
    create(body: CreateLocationDto): import("@prisma/client").Prisma.Prisma__LocationClient<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, body: CreateLocationDto): import("@prisma/client").Prisma.Prisma__LocationClient<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__LocationClient<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
