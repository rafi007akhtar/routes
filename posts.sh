# contains all curl requests for '/posts'

echo "GET /posts"
curl localhost:3000/posts
echo ""
sleep 1

echo "POST /posts"
curl -X POST localhost:3000/posts -d '{"id": 2, "user": "tannychaks", "text": "#punerocks", "comments": ["hahaha"]}' -H 'Content-Type: application/json'
echo ""
sleep 1

echo "PUT /posts"
curl -X PUT localhost:3000/posts/2 -d '{"id": 2, "user": "tannychaks", "text": "#punerocks", "comments": ["jajaja"]}' -H 'Content-Type: application/json'
echo ""
sleep 1

echo "DELETE /posts/"
curl -X DELETE localhost:3000/posts/2
