var vm = new Vue({
    el: "#app",
    data() {
        return {
            value: "2323",
        };
    },
    mounted() {
        const selector = this.$refs.inputmask;

        Inputmask({ regex: "[0-9]*" }).mask(selector);
    },
});
