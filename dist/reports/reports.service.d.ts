import { PrismaService } from '../prisma/prisma.service';
import { CreateReportDto } from './tdo/create-report.dto';
export declare class ReportsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        location: {
            id: number;
            name: string;
            latitude: number;
            longitude: number;
        };
    } & {
        id: number;
        title: string;
        description: string;
        locationId: number;
    })[]>;
    create(data: CreateReportDto): import("@prisma/client").Prisma.Prisma__ReportClient<{
        id: number;
        title: string;
        description: string;
        locationId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: CreateReportDto): import("@prisma/client").Prisma.Prisma__ReportClient<{
        location: {
            id: number;
            name: string;
            latitude: number;
            longitude: number;
        };
    } & {
        id: number;
        title: string;
        description: string;
        locationId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ReportClient<{
        id: number;
        title: string;
        description: string;
        locationId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
