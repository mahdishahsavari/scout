import {
  Injectable,
  UnauthorizedException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: DatabaseService) {}

  async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<User> {
    if (!email || !password || !firstName || !lastName) {
      throw new HttpException(
        'Please Fill Empty Parts!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const availableUser = await this.prisma.user.findFirst({
      where: { email },
    });

    if (availableUser) {
      throw new HttpException('User Already is Exist!', HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await bcrypt.hash(password, 16);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });

    return user;
  }

  async login(
    email: string,
    password: string,
  ): Promise<{
    user: { id: string; email: string; firstName: string; lastName: string };
  }> {
    if (!email || !password) {
      throw new HttpException(
        'Please Fill Empty Parts!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid Credentials!');
    } else {
      await this.prisma.user.update({
        where: { email },
        data: { isActive: true },
      });
    }

    const { id, email: userEmail, firstName, lastName } = user;

    return { user: { id, email: userEmail, firstName, lastName } };
  }

  async logout(userId: string): Promise<void> {
    return;
  }
}
