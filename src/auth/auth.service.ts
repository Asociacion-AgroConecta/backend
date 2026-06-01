import {
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) { }

    async register(data: RegisterDto) {

        const hashedPassword =
            await bcrypt.hash(data.password, 10);

        const user =
            await this.prisma.user.create({
                data: {
                    fullName: data.fullName,
                    email: data.email,
                    password: hashedPassword,
                    roleId: data.roleId,
                },
                include: {
                    role: true,
                },
            });

        return {
            message: 'Usuario registrado',
            user,
        };
    }

    async login(data: LoginDto) {

        const user =
            await this.prisma.user.findUnique({
                where: {
                    email: data.email,
                },
                include: {
                    role: true,
                },
            });

        if (!user) {
            throw new UnauthorizedException(
                'Usuario no encontrado',
            );
        }

        const passwordMatch =
            await bcrypt.compare(
                data.password,
                user.password,
            );

        if (!passwordMatch) {
            throw new UnauthorizedException(
                'Contraseña incorrecta',
            );
        }

        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role?.name ?? 'Usuario',
        };

        return {
            access_token:
                await this.jwtService.signAsync(payload),
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                role: user.role?.name ?? 'Usuario',
                roleId: user.roleId,
            },
        };
    }

    async profile(userId: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                role: true,
            },
        });

        if (!user) {
            throw new UnauthorizedException('Usuario no encontrado');
        }

        return {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role?.name ?? 'Usuario',
            roleId: user.roleId,
        };
    }
}
