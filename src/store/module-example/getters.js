import moment from "moment";

export const getters = {
  getModalVisible(state) {
    return state.modalVisible;
  },
  getTeamCards(state) {
    const completeUsers = ["larry", "yeonsu", "sonhansung", "이승현", "제리님", "aju", "mightytak", "톰리들", "comwls", "김성준", "hojin", "kimjinyoung", "jaeeun","jang"];
    state.teamCards.map(item => {
      if (item.teamType == "team") {
        item.peopleName =
          item.secondPeopleName != ""
            ? item.firstPeopleName + ", " + item.secondPeopleName
            : item.firstPeopleName;
      } else {
        item.peopleName = item.firstPeopleName;
      }
      console.log(item.peopleName.toLowerCase())
      if(completeUsers.indexOf(item.firstPeopleName.toLowerCase()) != -1){
        item.complete=true;
      }
      if(completeUsers.indexOf(item.secondPeopleName.toLowerCase()) != -1){
        item.complete=true;
      }
    });
    state.teamCards.sort(function (a, b) {
      if (!a.complete) {
        return 1;
      }
      if (a.complete) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    return state.teamCards;
  },
  getImageServerUrl(state) {
    return state.imageServerUrl;
  },
  getUpdateTeamCardData(state) {
    return state.updateTeamCardData;
  }
};
