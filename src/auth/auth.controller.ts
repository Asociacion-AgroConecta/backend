import {
    Controller,
    Post,
    Body,
    Get,
    Req,
    UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';

import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/wt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ) { }

    @Post('register')
    register(
        @Body() body: RegisterDto,
    ) {
        return this.authService.register(body);
    }

    @Post('login')
    login(
        @Body() body: LoginDto,
    ) {
        return this.authService.login(body);
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    me(@Req() request: any) {
        return this.authService.profile(request.user.userId);
    }
}
