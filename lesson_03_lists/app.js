const app = Vue.createApp({
  data() {
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/tnotw.jpg', isFav: true },
        { title: 'Wise Mans Fear', author: 'Patrick Rothfuss', img: 'assets/twmf.jpg', isFav: false },
        { title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/twok.jpg', isFav: false },
        { title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/tfe.jpg', isFav: true }
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
});

app.mount('#app');