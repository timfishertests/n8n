import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";
import { Person, PersonsState, RootState } from "../types/state";

export const state: () => PersonsState = () => ({
  persons: []
});

export const getters: GetterTree<PersonsState, RootState> = {};

export const mutations: MutationTree<PersonsState> = {};

export const actions: ActionTree<PersonsState, RootState> = {};
