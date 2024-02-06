import { faker } from "@faker-js/faker";
import { UserModel } from "./models";
import { CreateUserInput } from "./types";

const USERS: UserModel[] = [
  {
    id: 'user-1',
    name: 'MD',
    petsId: ['pet-1', 'pet-3']
  },
  {
    id: 'user-2',
    name: 'Jonas',
    petsId: ['pet-2'],
  },
  {
    id: 'user-3',
    name: 'Tobias',
    petsId: [],
  }
]

export class UserService {

  create(createUserInput: CreateUserInput): UserModel {
    const userModel: UserModel = {
      id: faker.string.uuid(),
      petsId: [],
      ...createUserInput
    }

    return userModel;
  }

  list(): UserModel[] {
    return USERS;
  }

  getById(id: string): UserModel {
    return USERS.find(user => user.id === id)!;
  }
}