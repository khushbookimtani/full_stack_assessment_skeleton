import { IsUUID, IsArray, ArrayNotEmpty,Validate } from 'class-validator';
import { HomeExistsConstraint } from '../validators/home_exists.validator';
import { UserExistsConstraint } from 'src/modules/users/validators/user_exists.validator';
export class UpdateUsersDto {
  @IsUUID()
  @Validate(HomeExistsConstraint)
  homeId: string;

  @IsArray()
  @IsUUID(undefined, { each: true })
  @Validate(UserExistsConstraint,{ each: true })
  userIds: string[];
}
