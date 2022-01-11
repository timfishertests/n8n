<template>
  <div>
    <div class="table-container">
      <table style="width: 100%">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Action</th>
        </tr>
        <tr
          v-for="(person, index) in persons"
          :key="person.firstName + person.lastName + index"
        >
          <td>{{ person.firstName }}</td>
          <td>{{ person.lastName }}</td>
          <td><el-button @click="remove(person)">Remove</el-button></td>
        </tr>
      </table>
    </div>
    <div class="input-container">
      <el-input v-model="firstName" placeholder="Firstname"></el-input>
      <el-input v-model="lastName" placeholder="Lastname"></el-input>
      <el-button @click="add">Add</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { ActionTypes } from "../store/persons";
import { PersonsState, Person } from "../types/state";
const namespace: string = "persons";

@Component
export default class Index extends Vue {
  @Action(ActionTypes.ADD_PERSON, { namespace }) addPerson: any;
  @Action(ActionTypes.REMOVE_PERSON, { namespace }) removePerson: any;
  // @ts-expect-error TS2564: Property 'persons' has no initializer and is not definitely assigned in the constructor.
  @Getter("persons", { namespace }) persons: PersonsState["persons"];

  private firstName: string = "";
  private lastName: string = "";

  add() {
    this.addPerson({
      firstName: this.firstName,
      lastName: this.lastName,
    });
    this.firstName = "";
    this.lastName = "";
  }

  remove(person: Person) {
    this.removePerson(person);
  }
}
</script>

<style scoped>
.table-container {
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.input-container {
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}

.el-input {
  margin-right: 2rem;
}

table,
th,
td {
  border: 1px solid black;
  padding: 15px;
}
</style>
