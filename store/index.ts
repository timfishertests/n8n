import { ActionContext, ActionTree } from "vuex";
import { RootState } from "~/types/state";

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({
    commit,
    dispatch
  }: ActionContext<RootState, RootState>) {},

  async nuxtClientInit() {}
};
