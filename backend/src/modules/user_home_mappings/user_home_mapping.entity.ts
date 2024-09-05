import { Entity, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Home } from '../homes/home.entity';

@Entity('user_home_mapping')
export class UserHomeMapping {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.userHomeMappings, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Home, home => home.userHomeMappings, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'home_id' })
  home: Home;
}
