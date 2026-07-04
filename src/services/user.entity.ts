import { Blog, User } from "../types/type.user";

export type BlogFields = (keyof Blog)[];
export const BLOG_FIELDS: BlogFields = ["id", "title", "htmlContent", "imageUrl", "createdAt"];

export type UserFields = (keyof User)[];
export const USER_FIELDS: UserFields = ["id", "lastName", "firstName", "phone", "email", "createdAt"];
