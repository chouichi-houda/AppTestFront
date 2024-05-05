import { UserTypeEnum } from "./UserTypeEnum.enum";
import { RolePermission } from "./RolePermission"
export class Role {
  id? : number;

  name? : string;

  type : UserTypeEnum = UserTypeEnum.ADMINISTRATOR;

  permissions : Array<RolePermission> = [];

}
