
export default function Resolvers(){
  
    let app = this;

    
    let Posts = app.service('posts');
    let Users = app.service('users');
    let Comments = app.service('comments');
    let Viewer = app.service('viewer');
    
    return {
      User: {
        posts(user, args, context){
          return Posts.find({
            query: {
              authorId: user.id
            }
          });
        }
      },
      Post: {
        comments(post, { limit }, context){
          return Comments.find({
            query: {
              postId: post.id
            }
          });
        },
        author(post, args, context){
          return Users.get(post.authorId);
        }
      },
      Comment: {
        author(comment, args, context){
          return Users.get(comment.authorId);
        }
      },
      AuthPayload : {
        data(auth, args, context) {
          return auth.data;
        }
      },
      RootQuery: {
        viewer(root, args, context) {
            return Viewer.find(context);
        },
        author(root, { username }, context){
          return Users.find({
            query: {
              username
            }
          }).then((users) => users[0]);
        },
        authors(root, args, context){
          return Users.find({})
        },
        allposts(root, args, context){
          return Posts.find({});
        },
        posts(root, { category }, context){
          return Posts.find({
            query: {
              category
            }
          });
        },
        post(root, { id }, context){
          return Posts.get(id)
        }
      },

      RootMutation: {
        signUp(root, args, context){
          return Users.create(args)
        },
        createPost(root, args, context){
          return Posts.create(args, context);
        },
        createComment(root, args, context){
          return Comments.create(args, context);
        },
        removePost(root, { id }, context) {
          return Posts.remove(id, context);
        },
        removeComment(root, { id }, context) {
          return Comments.remove(id, context);
        }
      }

  }
}

