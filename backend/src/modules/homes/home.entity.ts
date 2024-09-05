import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserHomeMapping } from '../user_home_mappings/user_home_mapping.entity';

@Entity()
export class Home {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'street_address'})
  streetAddress: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column()
  sqft: number;

  @Column()
  beds: number;

  @Column()
  baths: number;

  @Column({name: 'list_price'})
  listPrice: number;

  @OneToMany(() => UserHomeMapping, userHomeMapping => userHomeMapping.home)
  userHomeMappings: UserHomeMapping[];
}
