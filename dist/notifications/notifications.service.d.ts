import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        message: string;
        createdAt: Date;
    }[]>;
    create(data: CreateNotificationDto): import("@prisma/client").Prisma.Prisma__NotificationClient<{
        id: number;
        title: string;
        message: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: CreateNotificationDto): import("@prisma/client").Prisma.Prisma__NotificationClient<{
        id: number;
        title: string;
        message: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__NotificationClient<{
        id: number;
        title: string;
        message: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
