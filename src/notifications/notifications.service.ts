import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationsService {

    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.notification.findMany();
    }

    create(data: CreateNotificationDto) {
        return this.prisma.notification.create({
            data,
        });
    }

    update(id: number, data: CreateNotificationDto) {
        return this.prisma.notification.update({
            where: { id },
            data,
        });
    }

    remove(id: number) {
        return this.prisma.notification.delete({
            where: { id },
        });
    }
}
