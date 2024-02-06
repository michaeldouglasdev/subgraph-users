import { GetUserService } from "./services";
import { Resolvers, User } from "./types";

const USERS: User[] = [
  {
    id: 'user-1',
    name: 'MD',

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
    pet: ({ id }) => {
      console.log('id que chegou', id)
      return {
        id: 'pet-1'
      }
    },
    __resolveReference: ({ id }, context) => {
      return USERS.find(user => user.id === id)!;
    }
  }
}