import * as _chijioke_graphql_client from '@chijioke/graphql-client';
import { EntityCRUD, GraphQLClient } from '@chijioke/graphql-client';
export { GraphQLClient } from '@chijioke/graphql-client';

type UserType = "admin" | "client" | "physio";
interface User {
    id: string;
    lastName: string;
    firstName: string;
    phone: string;
    email: string;
    createdAt: string;
}
interface Blog {
    id: string;
    title: string;
    htmlContent: string;
    imageUrl: string;
    createdAt: string;
}
interface ContactUsData {
    fullName: string;
    email: string;
    phone: string;
    message: string;
}

type BlogFields = (keyof Blog)[];
declare const BLOG_FIELDS: BlogFields;
type UserFields = (keyof User)[];
declare const USER_FIELDS: UserFields;

declare const ENTITY$1: "user";
type UserCRUD = EntityCRUD<User, typeof ENTITY$1>;
declare const userIntegration: {
    get: {
        responseFields: ["user"];
        nestedFields: Record<"user", UserFields>;
    };
    create: {
        responseFields: ["user"];
        nestedFields: Record<"user", UserFields>;
    };
    update: {
        responseFields: ["user"];
        nestedFields: Record<"user", UserFields>;
    };
};
type GetUserResponseNestedFields = typeof userIntegration.get.nestedFields;
declare const userListIntegration: {
    responseFields: readonly ["users", "total"];
    nestedFields: Record<"users", UserFields>;
};
declare const userDeleteIntegration: {
    responseFields: ["userId"];
};
type ListUserResponseNestedFields = typeof userListIntegration.nestedFields;

declare const ENTITY: "blog";
type BlogCRUD = EntityCRUD<Blog, typeof ENTITY>;
declare const blogIntegration: {
    get: {
        responseFields: ["blog"];
        nestedFields: Record<"blog", UserFields>;
    };
    create: {
        responseFields: ["blog"];
        nestedFields: Record<"blog", UserFields>;
    };
    update: {
        responseFields: ["blog"];
        nestedFields: Record<"blog", UserFields>;
    };
};
declare const blogListIntegration: {
    responseFields: readonly ["blogs", "total"];
    nestedFields: Record<"blogs", UserFields>;
};
declare const blogDeleteIntegration: {
    responseFields: ["blogId"];
};

declare const createUserService: (client: GraphQLClient) => {
    createUser: (input: _chijioke_graphql_client.CreateEntityRequest<User, "user">, fetchFields?: {
        root?: "user"[] | undefined;
        nestedFields?: Record<"user", UserFields> | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<_chijioke_graphql_client.EntityResponse<User, "user"> | undefined>;
    updateUser: (input: _chijioke_graphql_client.UpdateEntityRequest<User, "user">, fetchFields?: {
        root?: "user"[] | undefined;
        nestedFields?: Record<"user", UserFields> | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<_chijioke_graphql_client.EntityResponse<User, "user"> | undefined>;
    deleteUser: (input: _chijioke_graphql_client.DeleteEntityRequest<"user">, fetchFields?: {
        root?: "userId"[] | undefined;
        nestedFields?: {} | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<_chijioke_graphql_client.DeleteEntityResponse<"user"> | undefined>;
    getUser: (input: _chijioke_graphql_client.GetEntityRequest<User, "user">, fetchFields?: {
        root?: "user"[] | undefined;
        nestedFields?: Record<"user", UserFields> | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<_chijioke_graphql_client.EntityResponse<User, "user"> | undefined>;
    listUser: (input: _chijioke_graphql_client.ListEntityRequest<User, "user">, fetchFields?: {
        root?: ("users" | "total")[] | undefined;
        nestedFields?: Record<"users", UserFields> | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<_chijioke_graphql_client.ListEntityResponse<User, "user"> | undefined>;
};

declare const createBlogService: (client: GraphQLClient) => {
    createBlog: (input: _chijioke_graphql_client.CreateEntityRequest<Blog, "blog">, fetchFields?: {
        root?: "blog"[] | undefined;
        nestedFields?: Record<"blog", UserFields> | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<_chijioke_graphql_client.EntityResponse<Blog, "blog"> | undefined>;
    updateBlog: (input: _chijioke_graphql_client.UpdateEntityRequest<Blog, "blog">, fetchFields?: {
        root?: "blog"[] | undefined;
        nestedFields?: Record<"blog", UserFields> | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<_chijioke_graphql_client.EntityResponse<Blog, "blog"> | undefined>;
    deleteBlog: (input: _chijioke_graphql_client.DeleteEntityRequest<"blog">, fetchFields?: {
        root?: "blogId"[] | undefined;
        nestedFields?: {} | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<_chijioke_graphql_client.DeleteEntityResponse<"blog"> | undefined>;
    getBlog: (input: _chijioke_graphql_client.GetEntityRequest<Blog, "blog">, fetchFields?: {
        root?: "blog"[] | undefined;
        nestedFields?: Record<"blog", UserFields> | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<_chijioke_graphql_client.EntityResponse<Blog, "blog"> | undefined>;
    listBlog: (input: _chijioke_graphql_client.ListEntityRequest<Blog, "blog">, fetchFields?: {
        root?: ("total" | "blogs")[] | undefined;
        nestedFields?: Record<"blogs", UserFields> | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<_chijioke_graphql_client.ListEntityResponse<Blog, "blog"> | undefined>;
};

interface ContactUsRequest {
    contactMessage: Partial<ContactUsData>;
}
interface ContactUsResponse {
    success: boolean;
}
type MeResponse = UserCRUD["GetResponse"] & {
    userType: UserType;
};
interface MeResponseNestedFields extends GetUserResponseNestedFields {
}
interface LoginRequest {
    pin?: string;
    phone?: string;
    email?: string;
    userType: UserType;
    password?: string;
}
interface LoginResponse {
    accessToken: string;
    userId: string;
}

declare const createAuthService: (client: GraphQLClient) => {
    contactUs: (input: ContactUsRequest, fetchFields?: {
        root?: "success"[] | undefined;
        nestedFields?: {} | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<ContactUsResponse | undefined>;
    login: (input: LoginRequest, fetchFields?: {
        root?: (keyof LoginResponse)[] | undefined;
        nestedFields?: {} | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<LoginResponse | undefined>;
    me: (input: {}, fetchFields?: {
        root?: ("user" | "userType")[] | undefined;
        nestedFields?: MeResponseNestedFields | undefined;
    } | undefined, option?: _chijioke_graphql_client.RequestOption) => Promise<MeResponse | undefined>;
};
type AuthService = ReturnType<typeof createAuthService>;

export { type AuthService, BLOG_FIELDS, type BlogCRUD, type BlogFields, type GetUserResponseNestedFields, type ListUserResponseNestedFields, USER_FIELDS, type UserCRUD, type UserFields, blogDeleteIntegration, blogIntegration, blogListIntegration, createAuthService, createBlogService, createUserService, userDeleteIntegration, userIntegration, userListIntegration };
