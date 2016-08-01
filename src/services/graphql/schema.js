const typeDefinitions = `

enum Category {
  POLITICS
  TECHNOLOGY
  SPORTS
  OTHER
}

type User {
  id: String! # the ! means that every author object _must_ have an id
  firstName: String
  lastName: String
  username: String!
  posts: [Post] # the list of Posts by this author
}

type Post {
  id: String!
  title: String
  category: String
  summary: String
  content: String!
  createdAt: String
  comments(limit: Int) : [Comment]
  author: User
}

type Comment {
  id: String!
  content: String!
  author: User
  createdAt: String
}

type AuthPayload {
  token: String # JSON Web Token
  data: User
}

input postInput {
  title: String!
  content: String!
  summary: String
  category: Category
}

# the schema allows the following two queries:
type RootQuery {
  viewer: User
  author(username: String!): User
  authors: [User]
  allposts: [Post]
  posts(category: Category): [Post]
  post(id: String!) : Post
}

# this schema allows the following two mutations:
type RootMutation {
  signUp (
    username: String!
    password: String!
    firstName: String
    lastName: String
  ): User

  logIn (
    username: String!
    password: String!
  ): AuthPayload

  createPost (
    post: postInput
    webtoken: String
  ): Post
  
  createComment (
    postId: String!
    content: String!
    webtoken: String
  ): Comment
 
  editPost (
    id: String! # _id of post to update
    post: postInput
    webtoken: String
  ): Post

  removePost (
    id: String! # _id of post to remove
    webtoken: String
  ): Post
  
  removeComment (
    id: String! # _id of comment to remove
    webtoken: String
  ): Comment
  
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: RootQuery
  mutation: RootMutation
}
`;



export default [typeDefinitions]
