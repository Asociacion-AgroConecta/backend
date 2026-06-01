import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notifications')
export class NotificationsController {

    constructor(
        private readonly notificationsService: NotificationsService,
    ) { }

    @Get()
    findAll() {
        return this.notificationsService.findAll();
    }

    @Post()
    create(@Body() body: CreateNotificationDto) {
        return this.notificationsService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: CreateNotificationDto) {
        return this.notificationsService.update(Number(id), body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.notificationsService.remove(Number(id));
    }
}
