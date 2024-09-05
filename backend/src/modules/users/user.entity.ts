import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserHomeMapping } from '../user_home_mappings/user_home_mapping.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @OneToMany(() => UserHomeMapping, userHomeMapping => userHomeMapping.user)
  userHomeMappings: UserHomeMapping[];
}
