import { T } from "./types";

export const mutations = {
  [T.CHANGE_MODAL_VISIBLE](state) {
    // console.log(`mutation [T.CHANGE_MODAL_VISIBLE] ${!state.modalVisible}`);
    state.modalVisible = !state.modalVisible;
  },
  [T.GET_TEAM_CARDS](state, result) {
    // console.log(`mutation [T.GET_TEAM_CARDS] ${result}`);
    state.teamCards = result;
  },
  [T.INSERT_TEAM_CARD_DATA](state, updateTeamCardData) {
    // console.log(`mutation [T.INSERT_TEAM_CARD_DATA] ${result}`);
    state.updateTeamCardData = updateTeamCardData;
  },
  [T.ADD_TEAM_CARD](state, result) {
    // console.log(`mutation [T.ADD_TEAM_CARD] ${result}`);
    state.teamCards = [...state.teamCards, result];
  },
  [T.UPDATE_TEAM_CARD](state, result) {
    // console.log(`mutation [T.UPDATE_TEAM_CARD] ${result}`);
    const newList = state.teamCards.map(currentCard => {
      if (result._id == currentCard._id) {
        currentCard = result;
      }
      return currentCard;
    });
    state.teamCards = newList;
  }
};
