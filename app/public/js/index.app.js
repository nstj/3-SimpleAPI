var app = new Vue({
  el: '.accordion',
  data: {
    resultList: []
  },

  created() {
    this.fetchUser(50);
  },
  
  methods: {
    fetchUser: function(numUsers){
    fetch("https://randomuser.me/api/?results=" + numUsers)
    .then( response => response.json() )
    .then( json => {this.resultList = json.results;}
    );
    }
  }
  })
