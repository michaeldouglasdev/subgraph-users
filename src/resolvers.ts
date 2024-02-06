import { GetUserService } from "./services";
import { Resolvers, User } from "./types";

const USERS: User[] = [
  {
    id: 'user-1',
    name: 'MD',
    pets: [],
  }
]

export const resolvers: Resolvers = {
  Query: {
    users: (parent, args, context, info) => {
      //return new GetUserService().execute();
      return USERS;
    }
  },
  User: {
    pets: async ({ id }) => {
      return [
        {
          id
        }
      ]
    },
    __resolveReference: ({ id }, context) => {
      return USERS.find(user => user.id === id)!;
    }
  }
}