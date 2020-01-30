import ga from "./analytics.js";
import { uid } from "quasar";
export default ({ router }) => {
  router.afterEach((to, from) => {
    ga.logPage(to.path, to.name, uid);
  });
};
