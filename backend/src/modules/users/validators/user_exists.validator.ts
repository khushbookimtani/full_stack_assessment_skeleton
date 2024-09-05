import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UserService } from '../user.service'; // Adjust the path as needed

@ValidatorConstraint({ name: 'userExists', async: true })
@Injectable()
export class UserExistsConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(userId: string): Promise<boolean> {
    const user = await this.userService.findById(userId);
    return !!user;
  }

  defaultMessage(): string {
    return 'User with the given ID does not exist';
  }
}
