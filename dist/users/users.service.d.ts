import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    })[]>;
    create(data: CreateUserDto): Promise<{
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
    }>;
    update(id: number, data: Partial<CreateUserDto>): Promise<{
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
    }>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        fullName: string;
        email: string;
        password: string;
        roleId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
