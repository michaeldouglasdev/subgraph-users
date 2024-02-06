import { UserService } from "./services";
import { Resolvers, User } from "./types";

const userService = new UserService();

export const resolvers: Resolvers = {
  Query: {
    users: (parent, args, context, info) => {
      return userService.list();
    }
  },
  User: {
    pets: ({ petsId }) => {
      return petsId.map(petId => ({ id: petId }));
    },
    __resolveReference: ({ id }, context) => {
      return userService.getById(id);
    }
  }
}