import { DefaultSchemaFields, SchemaConfig } from "@chijioke/graphql-client";

export const userSchema: Record<DefaultSchemaFields, SchemaConfig> = {
    create: {
        operation: "mutation",
        name: "createUser",
        variables: "($user: UserInput!)",
        field: "(user: $user)",
    },
    update: {
        operation: "mutation",
        name: "updateUser",
        variables: "($userId: String!, $user: UserInput!)",
        field: "(userId: $userId, user: $user)",
    },
    delete: {
        operation: "mutation",
        name: "deleteUser",
        variables: "($userId: String!)",
        field: "(userId: $userId)",
    },
    get: {
        operation: "query",
        name: "getUser",
        variables: "($user: UserInput!)",
        field: "(user: $user)",
    },
    list: {
        operation: "query",
        name: "listUser",
        variables: "($limit: Int!, $skip: Int!, $search: String, $userIds: [String], $user: UserInput)",
        field: "(limit: $limit, skip: $skip, search: $search, userIds: $userIds, user: $user)",
    }
}