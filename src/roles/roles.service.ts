import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {

    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.role.findMany({
            include: {
                users: true,
            },
        });
    }

    create(data: CreateRoleDto) {
        return this.prisma.role.create({
            data,
        });
    }

    update(id: number, data: CreateRoleDto) {
        return this.prisma.role.update({
            where: { id },
            data,
        });
    }

    remove(id: number) {
        return this.prisma.role.delete({
            where: { id },
        });
    }
}
