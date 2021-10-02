Vue.createApp({
    data() {
        return {
            words: ["","",""]
        }
    },
    methods: {
        show(word) {
            this.words = [];
            this.words.push(word);
            this.words.push(word.toLowerCase());
            this.words.push(word.toUpperCase());
        }
    }

}).mount("#app")