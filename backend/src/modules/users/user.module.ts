import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserHomeMapping } from '../user_home_mappings/user_home_mapping.entity';
import { UserExistsConstraint } from './validators/user_exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserHomeMapping])],
  providers: [UserService,UserExistsConstraint],
  controllers: [UserController],
  exports: [UserService,UserExistsConstraint], 
})
export class UserModule {}
