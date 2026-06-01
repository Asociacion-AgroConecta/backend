import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
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
    create(body: CreateRoleDto): import("@prisma/client").Prisma.Prisma__RoleClient<{
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, body: CreateRoleDto): import("@prisma/client").Prisma.Prisma__RoleClient<{
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__RoleClient<{
        id: number;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
