import { UserModel } from "./models";

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
  list(): UserModel[] {
    return USERS;
  }

  getById(id: string): UserModel {
    return USERS.find(user => user.id === id)!;
  }
}