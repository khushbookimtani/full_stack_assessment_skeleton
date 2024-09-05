import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserHomeMapping } from '../user_home_mappings/user_home_mapping.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserHomeMapping)
    private userHomeMappingRepository: Repository<UserHomeMapping>,
  ) {}
  
  async findById(id: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  findAll(): Promise<User[]> {
    console.log(this.userRepository);
    return this.userRepository.find();
  }

  async findByHome(homeId: string): Promise<User[]> {
    const uhms = await this.userHomeMappingRepository.createQueryBuilder('uhm')
      .innerJoinAndSelect('uhm.user', 'user')
      .where('uhm.home_id = :homeId', { homeId })
      .getMany();
    return uhms.map(uhm => uhm.user);
  }

}
