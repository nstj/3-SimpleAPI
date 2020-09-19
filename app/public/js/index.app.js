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
    fetch("https://randomuser.me/api/?results=3")
    .then( response => response.json() )
    // .then(data => {
    //   var userdata = data.results[0];
    //   console.log(userdata);
      
    // })
    .then( json => {this.resultList = json.results;}
    );
    }
  }
  })
