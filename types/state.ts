export interface RootState {
  persons: PersonsState;
}

export interface PersonsState {
  persons: [Person] | [];
}

export interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}
