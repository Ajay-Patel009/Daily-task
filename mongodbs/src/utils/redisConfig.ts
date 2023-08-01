import redis, { RedisClient } from 'redis';
import connectRedis from 'connect-redis';
import session, { SessionOptions } from 'express-session';

const redisClient: RedisClient = redis.createClient({
  host: 'localhost', // Replace with your Redis server's host
  port: 6379, // Replace with your Redis server's port
  // Add any other Redis configurations here if needed
});

const RedisStore = connectRedis(session);

const sessionStore = new RedisStore({ client: redisClient });

export { redisClient, sessionStore };
