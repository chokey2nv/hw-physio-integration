import { createStandardEntityIntegration, createListIntegration, EntityCRUD, createDeleteIntegration } from "@chijioke/graphql-client";
import { User } from "../../../types/type.user";
import { USER_FIELDS } from "../../user.entity";

const ENTITY = "user" as const;

export type UserCRUD = EntityCRUD<User, typeof ENTITY>;

export const userIntegration = createStandardEntityIntegration({
    key: ENTITY,
    fields: USER_FIELDS
});
export type GetUserResponseNestedFields =  typeof userIntegration.get.nestedFields

export const userListIntegration = createListIntegration({
    key: ENTITY,
    fields: USER_FIELDS
})

export const userDeleteIntegration = createDeleteIntegration(ENTITY);
export type ListUserResponseNestedFields =  typeof userListIntegration.nestedFields