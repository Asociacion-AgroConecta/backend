import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.user.findMany({
            include: {
                role: true,
            },
        });
    }

    async create(data: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(data.password, 10);

        return this.prisma.user.create({
            data: {
                ...data,
                password: hashedPassword,
            },
            include: {
                role: true,
            },
        });
    }

    async update(id: number, data: Partial<CreateUserDto>) {
        const password = data.password
            ? await bcrypt.hash(data.password, 10)
            : undefined;

        return this.prisma.user.update({
            where: { id },
            data: {
                fullName: data.fullName,
                email: data.email,
                roleId: data.roleId,
                ...(password ? { password } : {}),
            },
            include: {
                role: true,
            },
        });
    }

    remove(id: number) {
        return this.prisma.user.delete({
            where: { id },
        });
    }
}
