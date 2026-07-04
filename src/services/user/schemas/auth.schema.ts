import { DefaultSchemaFields, SchemaConfig } from "@chijioke/graphql-client";

export const authSchema:Record<"login"|"me"|"contactUs", SchemaConfig> = {
    me: {
        operation: "query",
        name: "me",
        variables: "",
        field: "",
    },
    login: {
        operation: "mutation",
        name: "login",
        variables: "($phone: String, $email: String, $pin: String, $userType: UserTypeEnum, $password: String)",
        field: "(phone: $phone, email: $email, pin: $pin, userType: $userType, password: $password)",
    },
    contactUs: {
        operation: "mutation",
        name: "contactUs",
        variables: "($contactMessage: ContactMessageInput!)",
        field: "(contactMessage: $contactMessage)",
    },

}