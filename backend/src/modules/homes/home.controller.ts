import { Controller, Get, Param, Query, Put, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('find-by-user/:userId')
  @HttpCode(HttpStatus.OK)
  findByUser(@Param('userId') userId: string, @Query('page') page = 1) {
    return this.homeService.findByUser(userId, +page);
  }

  @Put('update-users')
  @HttpCode(HttpStatus.OK)
  async updateUsers(@Body('homeId') homeId: string, @Body('userIds') userIds: string[]) {
    await this.homeService.updateUsers(homeId, userIds);
  }
}
