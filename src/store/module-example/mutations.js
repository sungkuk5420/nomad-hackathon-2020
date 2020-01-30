import { T } from "./types";

export const mutations = {
  [T.LOGIN](state, userInfo) {
    console.log(`mutation [T.LOGIN] userInfo = ${JSON.stringify(userInfo)}`);
    state.loginUser = userInfo;
    let userData = JSON.stringify(userInfo);
    console.log("localstoage" + userData);
    localStorage.setItem("loginUser", userData);
  }
  
};
