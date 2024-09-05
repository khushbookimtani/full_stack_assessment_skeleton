import { Controller, Get, Param, Query, Put, Body, HttpCode, HttpStatus,  UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdateUsersDto } from './dtos/update_users.dto';
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
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateUsers(@Body() updateUsersDto: UpdateUsersDto) {
    await this.homeService.updateUsers(updateUsersDto.homeId, updateUsersDto.userIds);
    return { message: 'Users updated successfully' };
  }
}
