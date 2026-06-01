import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    create(body: CreateUserDto): Promise<{
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
    update(id: string, body: Partial<CreateUserDto>): Promise<{
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
    remove(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        fullName: string;
        email: string;
        password: string;
        roleId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
