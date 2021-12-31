const app = Vue.createApp({
    data() {
        return {
            inputKlasse: '',
            visibo: false,
            inputBackColor: ''
        }
    },
    computed: {
        boxClasse() {

            return {
                user1: this.inputKlasse === 'user1',
                user2: this.inputKlasse === 'user2',
                visible: this.visibo, hidden: !this.visibo
            };
        }
    },
    methods: {
        boxSelected() {
            this.visibo = !this.visibo;
        }
    }
});

app.mount('#assignment')