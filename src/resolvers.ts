import { Resolvers, User } from "./types";

const USERS: User[] = [
  {
    id: '1',
    name: 'MD'
  }
]
export const resolvers: Resolvers = {
  Query: {
    users: (parent, args, context, info) => {
      return USERS;
    }
  },
}