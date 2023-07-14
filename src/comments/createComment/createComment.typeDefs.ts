// ./src/comments/createComment/createComment.typeDefs.ts
import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    createComment(photoId: Int!, text: String!): CommonResult!
  }
`;