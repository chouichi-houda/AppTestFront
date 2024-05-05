
import { Role } from "./Role";
import { UserTypeEnum } from "./UserTypeEnum.enum";
export class UserProfile{
  id? : number;

  type ?: UserTypeEnum ;

  userId ?: number;

  name ?: string;

  role : Role = new Role();
}

