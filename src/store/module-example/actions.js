import { T } from "./types";
import { ajaxActions } from "./ajaxActions";

export const actions = {
  [T.CHANGE_MODAL_VISIBLE]({ commit }) {
    console.log(`store action [T.CHANGE_MODAL_VISIBLE]`);
    commit(T.CHANGE_MODAL_VISIBLE);
  },
  // [T.JOIN_USER]({ commit }, params) {
  //   console.log(`store action [T.JOIN_USER] joinUser = ${params.joinUser}`);
  //   ajaxActions.joinUser(
  //     params.joinUser,
  //     results => {
  //       console.log(`action / JOIN_USER / success`);
  //       console.log(" reults=", results);
  //       if (params.cb) {
  //         params.cb(results);
  //       }
  //     },
  //     res => {
  //       console.log(`action / JOIN_USER / error`, res);
  //       commit(T.JOIN_USER);
  //     }
  //   );
  // }
};
