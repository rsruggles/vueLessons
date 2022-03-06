const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Final Empire',
      author: 'George Scott',
      age: 33
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
  }
});

app.mount('#app');