# contains all curl requests for '/comments'

echo "GET /posts/:id/comments"
curl localhost:3000/posts/1/comments
echo ""
sleep 1

echo "POST /posts/:id/comments"
curl -X POST localhost:3000/posts/1/comments -d '{"comment": "YJ"}' -H 'Content-Type: application/json'
echo ""
sleep 1

echo "PUT /posts/:id/comments/:cid"
curl -X PUT localhost:3000/posts/1/comments/2 -d '{"comment": "Got you covered"}' -H 'Content-Type: application/json'
echo ""
sleep 1

echo "DELETE /posts/:id/comments/:cid"
curl -X DELETE localhost:3000/posts/1/comments/2
