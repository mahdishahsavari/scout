import {
  Controller,
  Body,
  Post,
  Req,
  UseGuards,
  HttpCode,
  HttpStatus,
  HttpException,
  Res,
  Get,
  NotFoundException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { JwtCookieGuard } from './jwt-cookie.guard';

export class RegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export class LoginDto {
  email: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto) {
    try {
      return this.authService.register(
        registerDto.email,
        registerDto.password,
        registerDto.firstName,
        registerDto.lastName,
      );
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Authentication Failed, Please Try Again!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const { user } = await this.authService.login(
        loginDto.email,
        loginDto.password,
      );

      const payload = { email: user.email, sub: user.id, name: user.lastName };

      const accessToken = this.jwtService.sign(payload);

      response.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.JWT_SECRET === 'production',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });

      return { user };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Authentication Failed, Try Again!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('profile')
  @UseGuards(JwtCookieGuard)
  @HttpCode(HttpStatus.OK)
  async getProfile(@Req() request: Request) {
    const user = request.user;

    if (!user) {
      throw new NotFoundException('User Not Found!');
    }

    return { user };
  }

  @Post('logout')
  @UseGuards(JwtCookieGuard)
  @HttpCode(HttpStatus.OK)
  async logout(@Req() req: Request) {
    return this.authService.logout(req.user['sub']);
  }
}
