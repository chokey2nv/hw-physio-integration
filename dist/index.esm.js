import { createStandardEntityIntegration, createListIntegration, createDeleteIntegration, createOperationExecutor, buildSchema } from '@chijioke/graphql-client';
export { GraphQLClient } from '@chijioke/graphql-client';

// src/index.ts

// src/services/user.entity.ts
var BLOG_FIELDS = ["id", "title", "htmlContent", "imageUrl", "createdAt"];
var USER_FIELDS = ["id", "lastName", "firstName", "phone", "email", "createdAt"];

// src/services/user/types/user.type.ts
var ENTITY = "user";
var userIntegration = createStandardEntityIntegration({
  key: ENTITY,
  fields: USER_FIELDS
});
var userListIntegration = createListIntegration({
  key: ENTITY,
  fields: USER_FIELDS
});
var userDeleteIntegration = createDeleteIntegration(ENTITY);
var ENTITY2 = "blog";
var blogIntegration = createStandardEntityIntegration({
  key: ENTITY2,
  fields: USER_FIELDS
});
var blogListIntegration = createListIntegration({
  key: ENTITY2,
  fields: USER_FIELDS
});
var blogDeleteIntegration = createDeleteIntegration(ENTITY2);

// src/services/user/schemas/user.schema.ts
var userSchema = {
  create: {
    operation: "mutation",
    name: "createUser",
    variables: "($user: UserInput!)",
    field: "(user: $user)"
  },
  update: {
    operation: "mutation",
    name: "updateUser",
    variables: "($userId: String!, $user: UserInput!)",
    field: "(userId: $userId, user: $user)"
  },
  delete: {
    operation: "mutation",
    name: "deleteUser",
    variables: "($userId: String!)",
    field: "(userId: $userId)"
  },
  get: {
    operation: "query",
    name: "getUser",
    variables: "($user: UserInput!)",
    field: "(user: $user)"
  },
  list: {
    operation: "query",
    name: "listUser",
    variables: "($limit: Int!, $skip: Int!, $search: String, $userIds: [String], $user: UserInput)",
    field: "(limit: $limit, skip: $skip, search: $search, userIds: $userIds, user: $user)"
  }
};

// src/services/user/user.service.ts
var createUserService = (client) => ({
  createUser: createOperationExecutor(
    client,
    "createUser",
    {
      schema: buildSchema(userSchema.create),
      defaultRootFields: userIntegration.create.responseFields,
      defaultNestedFields: userIntegration.create.nestedFields
    }
  ),
  updateUser: createOperationExecutor(
    client,
    "updateUser",
    {
      schema: buildSchema(userSchema.update),
      defaultRootFields: userIntegration.update.responseFields,
      defaultNestedFields: userIntegration.update.nestedFields
    }
  ),
  // delete 
  deleteUser: createOperationExecutor(
    client,
    "deleteUser",
    {
      schema: buildSchema(userSchema.delete),
      defaultRootFields: userDeleteIntegration.responseFields,
      defaultNestedFields: {}
    }
  ),
  getUser: createOperationExecutor(
    client,
    "getUser",
    {
      schema: buildSchema(userSchema.get),
      defaultRootFields: userIntegration.get.responseFields,
      defaultNestedFields: userIntegration.get.nestedFields
    }
  ),
  listUser: createOperationExecutor(
    client,
    "listUser",
    {
      schema: buildSchema(userSchema.list),
      defaultRootFields: [...userListIntegration.responseFields],
      defaultNestedFields: userListIntegration.nestedFields
    }
  )
});

// src/services/user/schemas/blog.schema.ts
var blogSchema = {
  create: {
    operation: "mutation",
    name: "createBlog",
    variables: "($blog: BlogInput!)",
    field: "(blog: $blog)"
  },
  update: {
    operation: "mutation",
    name: "updateBlog",
    variables: "($blogId: String!, $blog: BlogInput!)",
    field: "(blogId: $blogId, blog: $blog)"
  },
  delete: {
    operation: "mutation",
    name: "deleteBlog",
    variables: "($blogId: String!)",
    field: "(blogId: $blogId)"
  },
  get: {
    operation: "query",
    name: "getBlog",
    variables: "($blog: BlogInput!)",
    field: "(blog: $blog)"
  },
  list: {
    operation: "query",
    name: "listBlog",
    variables: "($limit: Int!, $skip: Int!, $search: String, $blogIds: [String], $blog: BlogInput)",
    field: "(limit: $limit, skip: $skip, search: $search, blogIds: $blogIds, blog: $blog)"
  }
};

// src/services/user/blog.service.ts
var createBlogService = (client) => ({
  createBlog: createOperationExecutor(
    client,
    "createBlog",
    {
      schema: buildSchema(blogSchema.create),
      defaultRootFields: blogIntegration.create.responseFields,
      defaultNestedFields: blogIntegration.create.nestedFields
    }
  ),
  updateBlog: createOperationExecutor(
    client,
    "updateBlog",
    {
      schema: buildSchema(blogSchema.update),
      defaultRootFields: blogIntegration.update.responseFields,
      defaultNestedFields: blogIntegration.update.nestedFields
    }
  ),
  // delete 
  deleteBlog: createOperationExecutor(
    client,
    "deleteBlog",
    {
      schema: buildSchema(blogSchema.delete),
      defaultRootFields: blogDeleteIntegration.responseFields,
      defaultNestedFields: {}
    }
  ),
  getBlog: createOperationExecutor(
    client,
    "getBlog",
    {
      schema: buildSchema(blogSchema.get),
      defaultRootFields: blogIntegration.get.responseFields,
      defaultNestedFields: blogIntegration.get.nestedFields
    }
  ),
  listBlog: createOperationExecutor(
    client,
    "listBlog",
    {
      schema: buildSchema(blogSchema.list),
      defaultRootFields: [...blogListIntegration.responseFields],
      defaultNestedFields: blogListIntegration.nestedFields
    }
  )
});

// src/services/user/user.entity.ts
var userQuery = [
  "id",
  "createdAt",
  "email",
  "firstName",
  "lastName",
  "phone"
];

// src/services/user/types/auth.type.ts
var contactUsResponse = [
  "success"
];
var meResponse = [
  "user",
  "userType"
];
var meResponseNestedFields = {
  user: userQuery
};
var loginResponse = [
  "accessToken",
  "userId"
];

// src/services/user/schemas/auth.schema.ts
var authSchema = {
  me: {
    operation: "query",
    name: "me",
    variables: "",
    field: ""
  },
  login: {
    operation: "mutation",
    name: "login",
    variables: "($phone: String, $email: String, $pin: String, $userType: UserTypeEnum, $password: String)",
    field: "(phone: $phone, email: $email, pin: $pin, userType: $userType, password: $password)"
  },
  contactUs: {
    operation: "mutation",
    name: "contactUs",
    variables: "($contactMessage: ContactMessageInput!)",
    field: "(contactMessage: $contactMessage)"
  }
};

// src/services/user/auth.service.ts
var createAuthService = (client) => ({
  // contact us 
  contactUs: createOperationExecutor(
    client,
    "contactUs",
    {
      schema: buildSchema(authSchema.contactUs),
      defaultRootFields: contactUsResponse,
      defaultNestedFields: {}
    }
  ),
  login: createOperationExecutor(
    client,
    "login",
    {
      schema: buildSchema(authSchema.login),
      defaultRootFields: loginResponse,
      defaultNestedFields: {}
    }
  ),
  me: createOperationExecutor(
    client,
    "me",
    {
      schema: buildSchema(authSchema.me),
      defaultRootFields: [...meResponse],
      defaultNestedFields: meResponseNestedFields
    }
  )
});

export { BLOG_FIELDS, USER_FIELDS, blogDeleteIntegration, blogIntegration, blogListIntegration, createAuthService, createBlogService, createUserService, userDeleteIntegration, userIntegration, userListIntegration };
//# sourceMappingURL=index.esm.js.map
//# sourceMappingURL=index.esm.js.map