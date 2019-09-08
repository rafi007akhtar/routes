let express = require("express");
let app = express();
let bp = require("body-parser");
let morgan = require("morgan");

app.use(bp.json());
app.use(morgan("dev"));

let store = {
	posts: [{
		id: 1,
		user: "rafi007akhtar",
		text: "Traught, whelmed and feeling the aster",
		comments: [
			"today is the day",
			"i hacked the mainframe"
		]
	}]
};

// helper functions
function findPost(pid) {
	return store.posts.filter(p => p.id == pid)[0];
}
function findPostInd(pid) {
	let post = findPost(pid)
	let ind = store.posts.indexOf(post);
	return ind;
}

module.exports = { store, findPost, findPostInd };

// handling of requests
let posts = require("./posts");
let comments = require("./comments");

// routes for post
app.get("/posts", posts.getPosts);
app.post("/posts", posts.addPost);
app.put("/posts/:id", posts.updatePost);
app.delete("/posts/:id", posts.removePost);

// routes for comments
app.get("/posts/:id/comments", comments.getComments);
app.post("/posts/:id/comments", comments.addComment);
app.put("/posts/:id/comments/:cid", comments.updateComment);
app.delete("/posts/:id/comments/:cid", comments.removeComment);

let [port, ip] = [process.env.PORT, process.env.IP];
if (!port || !ip)
	app.listen(3000, () => console.log(`Server running at localhost:3000`));
else app.listen(port, ip, () => console.log(`Server running at ${ip}:${port}`));
