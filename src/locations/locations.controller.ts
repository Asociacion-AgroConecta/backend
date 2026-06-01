import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';

@Controller('locations')
export class LocationsController {

    constructor(private readonly locationsService: LocationsService) { }

    @Get()
    findAll() {
        return this.locationsService.findAll();
    }

    @Post()
    create(@Body() body: CreateLocationDto) {
        return this.locationsService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: CreateLocationDto) {
        return this.locationsService.update(Number(id), body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.locationsService.remove(Number(id));
    }
}
