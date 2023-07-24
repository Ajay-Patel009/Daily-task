import { createClient } from 'redis';

export async function redisConnect() {
    const client = createClient();

    client.on('error', err => console.log('Redis Client Error', err));

    await client.connect();

    await client.set('rew', '65');
    const value = await client.get('key');
    await client.disconnect();
}


