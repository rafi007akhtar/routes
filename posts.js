let index = require("./server");
let store = index.store;
let findPostInd = index.findPostInd;

module.exports = {
	getPosts(req, res) {
		console.log(store);
		return res.status(200).json({ msg: "JSON sent", store });
	},
	addPost(req, res) {
		res.set("Content-Type", "application/json");
		console.log(req.body);
		store.posts.push(req.body);
		console.log(store);
		return res.status(201).send({ msg: "JSON received", store });
	},
	updatePost(req, res) {
		let ind = findPostInd(req.params.id);
		if (ind === -1)
			return res.send("No such post present");
		store.posts[ind] = req.body;  // complete replacement for put
		console.log(store)
		return res.status(201).json({ msg: "JSON modified", store });
	},
	removePost(req, res) {
		let ind = findPostInd(req.params.id);
		if (ind === -1)
			return res.send("No such post present\n");
		store.posts.splice(ind, 1);
		console.log(store);
		return res.json({ msg: "JSON deleted", store });

	}
}
