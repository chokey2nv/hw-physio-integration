import { DefaultSchemaFields, SchemaConfig } from "@chijioke/graphql-client";

export const blogSchema: Record<DefaultSchemaFields, SchemaConfig> = {
    create: {
        operation: "mutation",
        name: "createBlog",
        variables: "($blog: BlogInput!)",
        field: "(blog: $blog)",
    },
    update: {
        operation: "mutation",
        name: "updateBlog",
        variables: "($blogId: String!, $blog: BlogInput!)",
        field: "(blogId: $blogId, blog: $blog)",
    },
    delete: {
        operation: "mutation",
        name: "deleteBlog",
        variables: "($blogId: String!)",
        field: "(blogId: $blogId)",
    },
    get: {
        operation: "query",
        name: "getBlog",
        variables: "($blog: BlogInput!)",
        field: "(blog: $blog)",
    },
    list: {
        operation: "query",
        name: "listBlog",
        variables: "($limit: Int!, $skip: Int!, $search: String, $blogIds: [String], $blog: BlogInput)",
        field: "(limit: $limit, skip: $skip, search: $search, blogIds: $blogIds, blog: $blog)",
    }
}