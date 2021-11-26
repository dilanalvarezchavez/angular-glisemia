import { PermissionModel } from "../permission/permission.model";

export interface RoleModel{
    id?:number;
    name?:number;
    permissions?: PermissionModel[];
}