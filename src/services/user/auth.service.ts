import { GraphQLClient } from "@chijioke/graphql-client";
import { buildSchema } from "@chijioke/graphql-client";
import { createOperationExecutor } from "@chijioke/graphql-client";
import { ContactUsRequest, contactUsResponse, ContactUsResponse, LoginRequest, loginResponse, LoginResponse, meResponse, MeResponse, meResponseNestedFields, MeResponseNestedFields } from "./types/auth.type";
import { authSchema } from "./schemas/auth.schema";

export const createAuthService = (client: GraphQLClient) => ({
    // contact us 
    contactUs: createOperationExecutor<
        "contactUs",
        ContactUsRequest,
        ContactUsResponse,
        {}
    >(
        client,
        "contactUs",
        {
            schema: buildSchema(authSchema.contactUs),
            defaultRootFields: contactUsResponse,
            defaultNestedFields: {},
        }
    ),
    login: createOperationExecutor<
        "login",
        LoginRequest,
        LoginResponse,
        {}
    >(
        client,
        "login",
        {
            schema: buildSchema(authSchema.login),
            defaultRootFields: loginResponse,
            defaultNestedFields: {},
        }
    ),
    me: createOperationExecutor<
        "me",
        {},
        MeResponse,
        MeResponseNestedFields
    >(
        client,
        "me",
        {
            schema: buildSchema(authSchema.me),
            defaultRootFields: [...meResponse],
            defaultNestedFields: meResponseNestedFields,
        }
    ),
})

export type AuthService = ReturnType<typeof createAuthService>