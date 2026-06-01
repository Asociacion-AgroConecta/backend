import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        message: string;
        createdAt: Date;
    }[]>;
    create(body: CreateNotificationDto): import("@prisma/client").Prisma.Prisma__NotificationClient<{
        id: number;
        title: string;
        message: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, body: CreateNotificationDto): import("@prisma/client").Prisma.Prisma__NotificationClient<{
        id: number;
        title: string;
        message: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__NotificationClient<{
        id: number;
        title: string;
        message: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
