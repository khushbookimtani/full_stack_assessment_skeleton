import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/user.module';
import { HomeModule } from './modules/homes/home.module';
import { UserHomeMappingModule } from './modules/user_home_mappings/user_home_mapping.module';
import { User } from './modules/users/user.entity';
import { Home } from './modules/homes/home.entity';
import { UserHomeMapping } from './modules/user_home_mappings/user_home_mapping.entity';
import { HomeService } from './modules/homes/home.service';  
import { UserService } from './modules/users/user.service';  
import { HomeController } from './modules/homes/home.controller';  
import { UserController } from './modules/users/user.controller';  
import { HomeExistsConstraint } from './modules/homes/validators/home_exists.validator';  
import { UserExistsConstraint } from './modules/users/validators/user_exists.validator';  
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1', 
      username: 'root',
      password: '6equj5_root',
      database: 'home_db',
      entities: [User, Home, UserHomeMapping],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([User, Home, UserHomeMapping]),
  ],
  controllers: [HomeController, UserController],
  providers: [
    HomeService,
    UserService,
    HomeExistsConstraint,
    UserExistsConstraint,
  ],
  exports: [HomeService, UserService],
})
export class AppModule {}
