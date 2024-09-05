import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './home.entity';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { UserHomeMapping } from '../user_home_mappings/user_home_mapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Home, UserHomeMapping])],
  providers: [HomeService],
  controllers: [HomeController],
  exports: [HomeService], 
})
export class HomeModule {}
