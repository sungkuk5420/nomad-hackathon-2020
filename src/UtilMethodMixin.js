let UtilMethodMixin = {
    methods: {
        movePage(pageName) {
            this.$emit('changed', pageName)
            this.$router.push(pageName);
        },
        showLoading() {
            this.$q.loading.show();
        },
        hideLoading() {
            this.$q.loading.hide();
        },
        successMessage(message) {
            this.$q.notify({
                position: "top",
                timeout: 500,
                message,
                icon: "announcement"
            });
        },
        errorMessage(message) {
            this.$q.notify({
                position: "top",
                timeout: 500,
                message,
                icon: "announcement"
            });
        }
    }
};
export default UtilMethodMixin;
