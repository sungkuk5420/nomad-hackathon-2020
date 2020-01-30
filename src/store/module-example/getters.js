import moment from "moment";

export const getters = {
  getModalVisible(state) {
    return state.modalVisible;
  },
  getTeamCards(state) {
    state.teamCards.map(item => {
      console.log(item.secondPeopleName != "");
      if (item.teamType == "team") {
        item.peopleName =
          item.secondPeopleName != ""
            ? item.firstPeopleName + ", " + item.secondPeopleName
            : item.firstPeopleName;
      }
    });
    return state.teamCards;
  },
  getImageServerUrl(state) {
    return state.imageServerUrl;
  }
};
