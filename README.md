# routes

This project was a part of an online course that I took on Express.

Its basic goal is to run a server that sets routing endpoints for social media `posts` and `comments`.

## Usage

### Terminal 1
- Open a new Terminal (or cmd), clone the repo, and enter the root folder
	```sh
	git clone https://github.com/rafi007akhtar/routes.git
	cd routes
	```

- Load the npm modules (defined inside package.json)
	```sh
	npm init -y
	```

- Start the server
	```sh
	npm start
	```

### Terminal 2
On another Terminal, run the following shell files for testing. These files, viz. [posts.sh](posts.sh) and [comments.sh](comments.sh) contain `curl` requests for the two endpoints defined.
```sh
# For /posts routing
chmod a+x posts.sh  # run this line only once
./posts.sh

# For /comments routing
chmod a+x comments.sh  # run this line only once
./comments.sh
```

> Note that you don't _have_ to use another Terminal or `curl` commands for sending these requests. You can also perform these operations with any HTTP client, such as [Postman](https://www.getpostman.com/).

## License
[MIT License](LICENSE)
