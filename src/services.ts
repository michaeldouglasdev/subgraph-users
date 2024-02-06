export interface UserResponse {
  id: string;
  name: string;
  petsId: string[];
}

export class GetUserService {
  execute(): UserResponse[] {
    return [
      {
        id: 'user-1',
        name: 'MD',
        petsId: ['pet-1'],
      }
    ]
  }
}