Vue.use(VueMaterial)

new Vue({
  el: '#app',
  data: {
    total: 0,
    items: [
      { id: 1, title: 'Item 1' },
      { id: 2, title: 'Item 2' },
      { id: 3, title: 'Item 3' },
    ],
    cart: []
  },
  methods: {
    addItem: function(index) {
      this.total += 9.99;
      var item = this.items[index];
      var found = false;
      for (var i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id === item.id) {
              found = true;
              this.cart[i].qty++;
          }
      }
      if (!found) {
          this.cart.push({
              id: item.id,
              title: item.title,
              qty: 1,
          });
      }
          //this.items[index]);
    },
    toggleLeftSidenav: function() {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav: function() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav: function() {
      this.$refs.rightSidenav.close();
    },
    open: function(ref) {
      console.log('Opened: ' + ref);
    },
    close: function(ref) {
      console.log('Closed: ' + ref);
    }
  }
});
