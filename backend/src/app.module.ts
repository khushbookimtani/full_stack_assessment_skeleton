import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/user.module';
import { HomeModule } from './modules/homes/home.module';
import { UserHomeMappingModule } from './modules/user_home_mappings/user_home_mapping.module';
import { User } from './modules/users/user.entity';
import { Home } from './modules/homes/home.entity';
import { UserHomeMapping } from './modules/user_home_mappings/user_home_mapping.entity';

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
    UserModule,
    HomeModule,
    UserHomeMappingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
