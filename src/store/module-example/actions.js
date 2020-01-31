import { T } from "./types";
import { ajaxActions } from "./ajaxActions";

export const actions = {
  [T.CHANGE_MODAL_VISIBLE]({ commit }) {
    // console.log(`store action [T.CHANGE_MODAL_VISIBLE]`);
    commit(T.CHANGE_MODAL_VISIBLE);
  },
  [T.ADD_TEAM_CARD]({ commit }, params) {
    // console.log(`store action [T.ADD_TEAM_CARD] params = ${params}`);
    ajaxActions.addTeamCard(
      params,
      results => {
        // console.log(`action / ADD_TEAM_CARD / success`);
        // console.log(" reults=", results);
        commit(T.ADD_TEAM_CARD, results.data);
        if (params.cb) {
          params.cb();
        }
      },
      res => {
        // console.log(`action / ADD_TEAM_CARD / error`, res);
      }
    );
  },
  [T.GET_TEAM_CARDS]({ commit }) {
    // console.log(`store action [T.GET_TEAM_CARDS] `);
    ajaxActions.getTeamCards(
      results => {
        // console.log(`action / GET_TEAM_CARDS / success`);
        // console.log(" reults=", results);
        commit(T.GET_TEAM_CARDS, results.data);
      },
      res => {
        // console.log(`action / GET_TEAM_CARDS / error`, res);
      }
    );
  },
  [T.INSERT_TEAM_CARD_DATA]({ commit }, params) {
    // console.log(`store action [T.UPDATE_TEAM_CARD] `);
    commit(T.INSERT_TEAM_CARD_DATA, params.insertTeamCardData);
    if (params.cb) {
      params.cb();
    }
  },
  [T.CHECK_UPDATE_PASSWORD]({ commit }, params) {
    // console.log(`store action [T.CHECK_UPDATE_PASSWORD] `);
    ajaxActions.checkPassword(
      params,
      results => {
        // console.log(`action / CHECK_UPDATE_PASSWORD / success`);
        // console.log(" reults=", results);
        if (params.cb) {
          params.cb(results.data);
        }
      },
      res => {
        // console.log(`action / UPDATE_TEAM_CARD / error`, res);
      }
    );
  },
  [T.UPDATE_TEAM_CARD]({ commit }, params) {
    // console.log(`store action [T.UPDATE_TEAM_CARD] `);
    ajaxActions.updateTeamCard(
      params,
      results => {
        // console.log(`action / UPDATE_TEAM_CARD / success`);
        // console.log(" reults=", results);
        commit(T.UPDATE_TEAM_CARD, results.data);
        if (params.cb) {
          params.cb();
        }
      },
      res => {
        // console.log(`action / UPDATE_TEAM_CARD / error`, res);
      }
    );
  }
};
