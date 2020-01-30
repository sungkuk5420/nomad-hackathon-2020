import { T } from "./types";
import { ajaxActions } from "./ajaxActions";

export const actions = {
  [T.CHANGE_MODAL_VISIBLE]({ commit }) {
    console.log(`store action [T.CHANGE_MODAL_VISIBLE]`);
    commit(T.CHANGE_MODAL_VISIBLE);
  },
  [T.ADD_TEAM_CARD]({ commit }, params) {
    console.log(`store action [T.ADD_TEAM_CARD] params = ${params}`);
    ajaxActions.addTeamCard(
      params,
      results => {
        console.log(`action / ADD_TEAM_CARD / success`);
        console.log(" reults=", results);
        commit(T.ADD_TEAM_CARD, results);
        if (params.cb) {
          params.cb(results);
        }
      },
      res => {
        console.log(`action / ADD_TEAM_CARD / error`, res);
      }
    );
  }
};
