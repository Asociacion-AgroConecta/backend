import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: RegisterDto): Promise<{
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
    login(body: LoginDto): Promise<{
        access_token: string;
        user: {
            id: number;
            fullName: string;
            email: string;
            role: string;
            roleId: number | null;
        };
    }>;
    me(request: any): Promise<{
        id: number;
        fullName: string;
        email: string;
        role: string;
        roleId: number | null;
    }>;
}
