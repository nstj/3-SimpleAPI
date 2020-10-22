var app = new Vue({
  el: '#vueApp',
  data: {
    CommentList: []
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
