var vm = new Vue({
    el: "#app",
    data() {
        return {
            value: "2323",
            phone: "",
        };
    },
    mounted() {
        const selector = this.$refs.inputmask1;
        const phone = this.$refs.inputmask2;

        Inputmask({ regex: "[0-9]*" }).mask(selector);
        Inputmask({ regex: "(0)([0-9]{2,4}-)(15[0-9]{6,8})" }).mask(phone);
    },
});
