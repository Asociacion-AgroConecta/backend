import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(data: RegisterDto): Promise<{
        message: string;
        user: {
            role: {
                id: number;
                name: string;
            } | null;
        } & {
            id: number;
            fullName: string;
            email: string;
            password: string;
            roleId: number | null;
        };
    }>;
    login(data: LoginDto): Promise<{
        access_token: string;
        user: {
            id: number;
            fullName: string;
            email: string;
            role: string;
            roleId: number | null;
        };
    }>;
    profile(userId: number): Promise<{
        id: number;
        fullName: string;
        email: string;
        role: string;
        roleId: number | null;
    }>;
}
