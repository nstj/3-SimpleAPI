var app = new Vue({
  el: '.accordion',
  data: {
    user1: {},
    user2: {},
    user3: {}
  },

  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser: function(){
    fetch("https://randomuser.me/api/?results=3")
    .then( response => response.json() )
    .then(data => {
      var userOne = data.results[0];
      var userTwo = data.results[1];
      var userThree = data.results[2];
      console.log(userOne.data);
       this.user1 = userOne;
       this.user2 = userTwo;
       this.user3 = userThree;
    })
  }
  }})
