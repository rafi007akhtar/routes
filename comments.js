let express = require("express");
let app = express();
let bp = require("body-parser");
let morgan = require("morgan");

app.use(bp.json());
app.use(morgan("dev"));

let index = require("./index");
let store = index.store;
let findPostInd = index.findPostInd;
let findPost = index.findPost;

app.get("/posts/:id/comments", (req, res) => {
	let ind = findPostInd(req.params.id);
	console.log(store.posts[ind]);
	return res.status(200).json({"comments:": store.posts[ind].comments});
});
app.post("/posts/:id/comments", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	let myPost = findPost(req.params.id);
	myPost.comments.push(req.body.comment);  // make sure to post the data in {'comment': 'your comment'} format
	console.log(store);
	return res.send(myPost.comments);
});
app.put("/posts/:id/comments/:cid", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	let myPost = findPost(req.params.id);
	myPost.comments.splice(req.params.cid, 1, req.body.comment);  // assuming the comment id to be the index of the comment array
	console.log(store);
	return res.send(myPost.comments);	
});
app.delete("/posts/:id/comments/:cid", (req, res) => {
	let myPost = findPost(req.params.id);
	myPost.comments.splice(req.params.cid, 1);
	console.log(store);
	return res.send(myPost.comments);	
});

let [port, ip] = [process.env.PORT, process.env.IP];
if (!port || !ip)
	app.listen(4200, () => console.log("Server running at localhost:4200"));
else app.listen(port, ip, () => console.log(`Server running at ${ip}:${port}`));
