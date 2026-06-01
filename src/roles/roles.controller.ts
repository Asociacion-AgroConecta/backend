import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {

    constructor(
        private readonly rolesService: RolesService,
    ) { }

    @Get()
    findAll() {
        return this.rolesService.findAll();
    }

    @Post()
    create(@Body() body: CreateRoleDto) {
        return this.rolesService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: CreateRoleDto) {
        return this.rolesService.update(Number(id), body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.rolesService.remove(Number(id));
    }
}
