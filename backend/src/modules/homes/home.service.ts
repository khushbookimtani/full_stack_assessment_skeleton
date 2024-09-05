import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Home } from './home.entity';
import { UserHomeMapping } from '../user_home_mappings/user_home_mapping.entity';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Home)
    private homeRepository: Repository<Home>,
    @InjectRepository(UserHomeMapping)
    private userHomeMappingRepository: Repository<UserHomeMapping>,

  ) {}

  async findById(id: string): Promise<Home | undefined> {
    return this.homeRepository.findOne({ where: { id } });
  }
  
  async findByUser(userId: string, page: number): Promise<{ data: Home[], totalPages: number, totalCount: number }> {
    const pageSize = 50;

    const [userHomeMappings, totalCount] = await this.userHomeMappingRepository.findAndCount({
      where: { user: { id: userId } },
      relations: ['home'],
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    const homes = userHomeMappings.map(mapping => mapping.home);

    const totalPages = Math.ceil(totalCount / pageSize);

    return { data: homes, totalPages, totalCount };
  }

  async updateUsers(homeId: string, userIds: string[]): Promise<void> {
    await this.userHomeMappingRepository.delete({ home: { id: homeId } });

    const userHomeMappings = userIds.map(userId => {
      return this.userHomeMappingRepository.create({
        user: { id: userId } as any,
        home: { id: homeId } as any,
      });
    });

    await this.userHomeMappingRepository.save(userHomeMappings);
  }
}
