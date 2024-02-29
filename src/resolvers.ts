import { UserService } from "./services";
import { Resolvers, User } from "./types";

const userService = new UserService();

export const resolvers: Resolvers = {
  Query: {
    users: (parent, args, context, info) => {
      return userService.list();
    }
  },
  Mutation: {
    createUser: (parent, args, context, info) => {
      const user = userService.create(args.data);
      return {
        code: 200,
        message: "User created Succesfully",
        success: true,
        user
      }
    }
  },
  User: {
    /*pets: ({ petsId }) => {
      return petsId.map(petId => ({ id: petId }));
    },*/
    __resolveReference: ({ id }) => {
      return userService.getById(id);
    }
  }
}