import { buildSchema, createOperationExecutor, GraphQLClient } from "@chijioke/graphql-client";
import { UserCRUD, userDeleteIntegration, userIntegration, userListIntegration } from "./types";
import { userSchema } from "./schemas/user.schema";

export const createUserService = (client: GraphQLClient) => ({
    createUser: createOperationExecutor<
        "createUser",
        UserCRUD["CreateRequest"],
        UserCRUD["CreateResponse"],
        typeof userIntegration.create.nestedFields
    >(
        client, 
        "createUser",
        {
            schema: buildSchema(userSchema.create),
            defaultRootFields: userIntegration.create.responseFields,
            defaultNestedFields: userIntegration.create.nestedFields
        }
    ),
    updateUser: createOperationExecutor<
        "updateUser",
        UserCRUD["UpdateRequest"],
        UserCRUD["UpdateResponse"],
        typeof userIntegration.update.nestedFields
    >(
        client, 
        "updateUser",
        {
            schema: buildSchema(userSchema.update),
            defaultRootFields: userIntegration.update.responseFields,
            defaultNestedFields: userIntegration.update.nestedFields
        }
    ),
    // delete 
    deleteUser: createOperationExecutor<
        "deleteUser",
        UserCRUD["DeleteRequest"],
        UserCRUD["DeleteResponse"],
        {}
    >(
        client, 
        "deleteUser",
        {
            schema: buildSchema(userSchema.delete),
            defaultRootFields: userDeleteIntegration.responseFields,
            defaultNestedFields: {}
        }
    ),
    getUser: createOperationExecutor<
        "getUser",
        UserCRUD["GetRequest"],
        UserCRUD["GetResponse"],
        typeof userIntegration.get.nestedFields
    >(
        client, 
        "getUser",
        {
            schema: buildSchema(userSchema.get),
            defaultRootFields: userIntegration.get.responseFields,
            defaultNestedFields: userIntegration.get.nestedFields
        }
    ),
    listUser: createOperationExecutor<
        "listUser",
        UserCRUD["ListRequest"],
        UserCRUD["ListResponse"],
        typeof userListIntegration.nestedFields
    >(
        client, 
        "listUser",
        {
            schema: buildSchema(userSchema.list),
            defaultRootFields: [...userListIntegration.responseFields],
            defaultNestedFields: userListIntegration.nestedFields
        }
    ),
})