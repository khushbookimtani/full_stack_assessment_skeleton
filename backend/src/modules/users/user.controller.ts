import { Controller, Get, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find-all')
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.userService.findAll();
  }

  @Get('find-by-home/:homeId')
  @HttpCode(HttpStatus.OK)
  findByHome(@Param('homeId') homeId: string) {
    return this.userService.findByHome(homeId);
  }
}
