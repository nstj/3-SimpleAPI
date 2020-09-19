var app = new Vue({
  el: '.accordion',
  data: {
    resultList: []
  },

  created() {
    this.fetchUser();
  },
  
  methods: {
    fetchUser: function(){
    fetch("https://randomuser.me/api/?results=50")
    .then( response => response.json() )
    .then( json => {this.resultList = json.results;}
    );
    }
  }
  })
