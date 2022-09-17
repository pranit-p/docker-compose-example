var http = require("http");
var redis = require("redis");

let redisClient = redis.createClient({
  legacyMode: true,
  socket: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
  },
});

redisClient.connect().catch(console.error);

redisClient.set("framework", "ReactJS");

redisClient.get("framework", function (err, reply) {
  http
    .createServer(function (req, res) {
      res.write("<h1>Hello, Welcome to docker compose</h1>");
      res.write("We will use " + reply + " framework");

      res.end();
    })
    .listen(3000);
  console.log(reply);
});
