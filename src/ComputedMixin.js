import { mapGetters } from "vuex";
let ComputedMixin = {
    computed: {
        ...mapGetters({
            centerTab: "getCenterTab",
        }),
    }
};
export default ComputedMixin;
