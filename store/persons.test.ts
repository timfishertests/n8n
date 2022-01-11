import { Person, PersonsState } from "~/types/state";
import {
  actions,
  ActionTypes,
  getters,
  mutations,
  MutationTypes,
  state,
} from "./persons";
// @ts-expect-error types
import testAction from "vue-test-actions";

test("Add person mutation adds a person", () => {
  const state: PersonsState = { persons: [] };
  const mockPerson: Person = { firstName: "Test", lastName: "User" };
  mutations[MutationTypes.ADD_PERSON](state, mockPerson);
  expect(state.persons).toStrictEqual([mockPerson]);
});

test("Remove person mutation removes a person", () => {
  const mockPerson: Person = { firstName: "Test", lastName: "User" };
  const state: PersonsState = { persons: [mockPerson] };
  mutations[MutationTypes.REMOVE_PERSON](state, mockPerson);
  expect(state.persons).toStrictEqual([]);
});

test("Persons getter", () => {
  const mockPerson: Person = { firstName: "Test", lastName: "User" };
  const state: PersonsState = { persons: [mockPerson] };

  // @ts-expect-error arguments
  const result = getters.persons(state);

  expect(result).toStrictEqual([mockPerson]);
});

test("Add person action commits correctly", () => {
  const mockPerson: Person = { firstName: "Test", lastName: "User" };
  const expectedCommits = [
    { type: MutationTypes.ADD_PERSON, payload: mockPerson },
  ];
  testAction(
    actions[ActionTypes.ADD_PERSON],
    expectedCommits,
    undefined,
    mockPerson
  );
});

test("Remove person action commits correctly", () => {
  const mockPerson: Person = { firstName: "Test", lastName: "User" };
  const expectedCommits = [
    { type: MutationTypes.REMOVE_PERSON, payload: mockPerson },
  ];
  testAction(
    actions[ActionTypes.REMOVE_PERSON],
    expectedCommits,
    undefined,
    mockPerson
  );
});

test("initial state", () => {
  expect(state()).toStrictEqual({ persons: [] });
});
