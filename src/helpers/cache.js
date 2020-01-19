const redisClient = require('../utils/redis')

const TTL = 3600

module.exports = {
    save : (key,value) => {
        try {
            redisClient.setex(key,TTL,value);
        } catch (e) {
            console.log(`Error saving to the cache for key: ${key}, value: ${value}` + e)
        }
    },
    cache : (req, res, next) => {
        const { id_product } = req.params
    
        redisClient.get(id_product)
    }
}