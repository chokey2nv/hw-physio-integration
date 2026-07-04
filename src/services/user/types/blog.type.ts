import { createStandardEntityIntegration, createListIntegration, EntityCRUD, createDeleteIntegration } from "@chijioke/graphql-client";
import { Blog } from "../../../types/type.user";
import { USER_FIELDS } from "../../user.entity";

const ENTITY = "blog" as const;

export type BlogCRUD = EntityCRUD<Blog, typeof ENTITY>;

export const blogIntegration = createStandardEntityIntegration({
    key: ENTITY,
    fields: USER_FIELDS
});

export const blogListIntegration = createListIntegration({
    key: ENTITY,
    fields: USER_FIELDS
})

export const blogDeleteIntegration = createDeleteIntegration(ENTITY);