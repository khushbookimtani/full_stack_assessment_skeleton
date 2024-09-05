import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHomeMapping } from './user_home_mapping.entity';
import { User } from '../users/user.entity';
import { Home } from '../homes/home.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserHomeMapping, User, Home]),
  ],
})
export class UserHomeMappingModule {}
