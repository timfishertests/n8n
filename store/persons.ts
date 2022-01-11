import { ActionTree, GetterTree, MutationTree } from "vuex";
import { Person, PersonsState, RootState } from "../types/state";

export enum MutationTypes {
  ADD_PERSON = "ADD_PERSON",
  REMOVE_PERSON = "REMOVE_PERSON",
}

export enum ActionTypes {
  ADD_PERSON = "ADD_PERSON",
  REMOVE_PERSON = "REMOVE_PERSON",
}

export const state = (): PersonsState => ({
  persons: [],
});

export const getters: GetterTree<PersonsState, RootState> = {
  persons(state: PersonsState): PersonsState["persons"] {
    return state.persons;
  },
};

export const mutations: MutationTree<PersonsState> = {
  [MutationTypes.ADD_PERSON](state, person: Person) {
    state.persons.push(person as never);
  },
  [MutationTypes.REMOVE_PERSON](state, { firstName, lastName }: Person) {
    const index = state.persons.findIndex(
      (person) => person.firstName == firstName && person.lastName == lastName
    );
    state.persons.splice(index, 1);
  },
};

export const actions: ActionTree<PersonsState, RootState> = {
  [ActionTypes.ADD_PERSON]: ({ commit }, person: Person) => {
    commit(MutationTypes.ADD_PERSON, person);
  },
  [ActionTypes.REMOVE_PERSON]: ({ commit }, person: Person) => {
    commit(MutationTypes.REMOVE_PERSON, person);
  },
};
