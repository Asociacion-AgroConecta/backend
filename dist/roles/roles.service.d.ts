import { PrismaService } from '../prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
export declare class RolesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        users: {
            id: number;
            fullName: string;
            email: string;
            password: string;
            roleId: number | null;
        }[];
    } & {
        id: number;
        name: string;
    })[]>;
    create(data: CreateRoleDto): import("@prisma/client").Prisma.Prisma__RoleClient<{
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: CreateRoleDto): import("@prisma/client").Prisma.Prisma__RoleClient<{
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__RoleClient<{
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
