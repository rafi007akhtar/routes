let index = require("./server");
let store = index.store;
let findPostInd = index.findPostInd;
let findPost = index.findPost;

module.exports = {
	getComments(req, res) {
		let ind = findPostInd(req.params.id);
		console.log(store.posts[ind]);
		return res.status(200).json({"comments:": store.posts[ind].comments});
	}, 
	addComment(req, res) {
		res.setHeader("Content-Type", "application/json");
		let myPost = findPost(req.params.id);
		myPost.comments.push(req.body.comment);  // make sure to post the data in {'comment': 'your comment'} format
		console.log(store);
		return res.send(myPost.comments);
	},
	updateComment(req, res) {
		res.setHeader("Content-Type", "application/json");
		let myPost = findPost(req.params.id);
		myPost.comments.splice(req.params.cid, 1, req.body.comment);  // assuming the comment id to be the index of the comment array
		console.log(store);
		return res.send(myPost.comments);	
	},
	removeComment(req, res) {
		let myPost = findPost(req.params.id);
		myPost.comments.splice(req.params.cid, 1);
		console.log(store);
		return res.send(myPost.comments);
	}  
  }

