import { ReportsService } from './reports.service';
import { CreateReportDto } from './tdo/create-report.dto';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
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
    create(body: CreateReportDto): import("@prisma/client").Prisma.Prisma__ReportClient<{
        id: number;
        title: string;
        description: string;
        locationId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, body: CreateReportDto): import("@prisma/client").Prisma.Prisma__ReportClient<{
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
    remove(id: string): import("@prisma/client").Prisma.Prisma__ReportClient<{
        id: number;
        title: string;
        description: string;
        locationId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
