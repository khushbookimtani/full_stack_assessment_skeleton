import { Injectable, Inject } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { HomeService } from '../home.service'; 

@ValidatorConstraint({ name: 'homeExists', async: true })
@Injectable()
export class HomeExistsConstraint implements ValidatorConstraintInterface {
  constructor(
    @Inject(HomeService)
    private readonly homeService: HomeService,  
  ) {}

  async validate(homeId: string): Promise<boolean> {
    const home = await this.homeService.findById(homeId);
    return !!home;
  }

  defaultMessage(): string {
    return 'Home with the given ID does not exist';
  }
}
