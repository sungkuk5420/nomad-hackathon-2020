import { T } from "./types";

export const mutations = {
  [T.CHANGE_MODAL_VISIBLE](state) {
    console.log(`mutation [T.CHANGE_MODAL_VISIBLE] ${!state.modalVisible}`);
    state.modalVisible = !state.modalVisible;
  }
  
};
