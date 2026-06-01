export class CreateUserDto {
    fullName: string;
    email: string;
    password: string;
    roleId?: number;
}
