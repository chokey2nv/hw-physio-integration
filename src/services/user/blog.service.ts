import { buildSchema, createOperationExecutor, GraphQLClient } from "@chijioke/graphql-client";
import { BlogCRUD, blogDeleteIntegration, blogIntegration, blogListIntegration } from "./types";
import { blogSchema } from "./schemas/blog.schema";

export const createBlogService = (client: GraphQLClient) => ({
    createBlog: createOperationExecutor<
        "createBlog",
        BlogCRUD["CreateRequest"],
        BlogCRUD["CreateResponse"],
        typeof blogIntegration.create.nestedFields
    >(
        client, 
        "createBlog",
        {
            schema: buildSchema(blogSchema.create),
            defaultRootFields: blogIntegration.create.responseFields,
            defaultNestedFields: blogIntegration.create.nestedFields
        }
    ),
    updateBlog: createOperationExecutor<
        "updateBlog",
        BlogCRUD["UpdateRequest"],
        BlogCRUD["UpdateResponse"],
        typeof blogIntegration.update.nestedFields
    >(
        client, 
        "updateBlog",
        {
            schema: buildSchema(blogSchema.update),
            defaultRootFields: blogIntegration.update.responseFields,
            defaultNestedFields: blogIntegration.update.nestedFields
        }
    ),
    // delete 
    deleteBlog: createOperationExecutor<
        "deleteBlog",
        BlogCRUD["DeleteRequest"],
        BlogCRUD["DeleteResponse"],
        {}
    >(
        client, 
        "deleteBlog",
        {
            schema: buildSchema(blogSchema.delete),
            defaultRootFields: blogDeleteIntegration.responseFields,
            defaultNestedFields: {}
        }
    ),
    getBlog: createOperationExecutor<
        "getBlog",
        BlogCRUD["GetRequest"],
        BlogCRUD["GetResponse"],
        typeof blogIntegration.get.nestedFields
    >(
        client, 
        "getBlog",
        {
            schema: buildSchema(blogSchema.get),
            defaultRootFields: blogIntegration.get.responseFields,
            defaultNestedFields: blogIntegration.get.nestedFields
        }
    ),
    listBlog: createOperationExecutor<
        "listBlog",
        BlogCRUD["ListRequest"],
        BlogCRUD["ListResponse"],
        typeof blogListIntegration.nestedFields
    >(
        client, 
        "listBlog",
        {
            schema: buildSchema(blogSchema.list),
            defaultRootFields: [...blogListIntegration.responseFields],
            defaultNestedFields: blogListIntegration.nestedFields
        }
    ),
})