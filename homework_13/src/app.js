var myApp = angular.module('myApp', ["data"]);

myApp.controller('MyCtrl', ['posts', function(posts) {
  this.posts = posts;
  this.filter = {};
  this.addActive = false;
  this.isAddError = false;
  this.newInputsPost = null;

  this.showView = function(post) {
    delete post.viewEdit;
    delete post.edited;
  };
  
  this.showEdit = function(post) {
    post.edited = angular.copy(post);
    post.edited.categories = this.getInputCategories(post.edited.categories);
    post.viewEdit = true;
  };

  this.toggleAddActive = function() {
    this.addActive = !this.addActive;
  };

  this.getInputCategories = (categories) => {
    return categories.join(" ");
  }

  this.getArrayCategories = (categories) => {
    return categories.split(/[ ,]+/);
  }

  this.getUniqueCategories = () => {
    let uniqueCategories = [];
    this.posts.forEach(post => {
        post.categories.forEach(category => {
            if (uniqueCategories.indexOf(category) === -1) {
              uniqueCategories.push(category);
            }
        })
    });
    return uniqueCategories;
  }

  this.addNewPost = (title, categories, desc, photo) => {
    if(!title || !categories || !desc) {
      this.isAddError = true;
    }
    else {
      var newPost = {
        title: title,
        categories: this.getArrayCategories(categories),
        description: desc,
        photo: photo ? photo : "default.jpg"
      }
      this.posts.push(newPost);
      this.newInputsPost = null
      this.toggleAddActive();
    }
  };

  this.editPost = (post, title, categories, desc, photo) => {
    if(!title || !categories || !desc) {
      post.edited.isEditError = true;
    }
    else {
      post.title = title;
      post.categories = this.getArrayCategories(categories);
      post.description = desc;
      post.photo = photo ? photo : "default.jpg";
      this.showView(post);
    }
  }
}]);