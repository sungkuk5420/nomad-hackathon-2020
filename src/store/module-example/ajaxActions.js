import axios from "axios";

// const apiURL = "http://localhost:8000";
const apiURL = "https://devkim.dev";

export const ajaxActions = {
  joinUser(joinUser, cSuccess, cError) {
    console.log(joinUser);
    let options = {
      url() {
        return `${apiURL}/joinUser`;
      }
    };
    let api = axios.create();
    console.log("url= ", options.url());
    axios
      .all([
        api.post(options.url(), {
          joinUser
        })
      ])
      .then(responses => {
        let errors = responses.filter(res => {
          return res.status !== 200;
        });
        if (errors.length < 1) {
          console.log("200 response= ", responses[0]);
          cSuccess(responses[0]);
        } else {
          let errmsgs = errors.reduce((memo = "", res) => {
            return memo + `${res.status} : ${res.message} \n`;
          }, "");
          console.warn(errmsgs);
        }
      });
  }
};
