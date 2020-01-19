const redis = require('redis');

const redisClient = redis.createClient(process.env.REDIS_PORT);
redisClient.on('error', (err) => {
    console.log('Redis Error' + err);
});

module.exports = redisClient