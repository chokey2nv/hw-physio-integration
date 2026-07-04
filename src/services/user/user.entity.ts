import { User } from "../../types/type.user";

export type UserFields = (keyof User)[];


export const userQuery:UserFields = [
    "id", "createdAt", "email",
    "firstName", "lastName", "phone",
]