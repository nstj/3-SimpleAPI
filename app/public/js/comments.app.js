var app = new Vue({
  el: '.accordion',
  data: {
    commentList: []
  },

  created() {
    this.fetchComments();
  },
  
  methods: {
    fetchComments(){
    fetch('api/comments/')
    .then( response => response.json() )
    .then( json => {this.commentList = json;}
    );
    }
  }
  })
