const redis = require("redis");

const redisProt = 6379
const pass = "redis"
const redisClient = redis.createClient({
    host : "127.0.0.1",
    port : redisPort,
    db : 0,
    password : pass
})

export default redisClient;