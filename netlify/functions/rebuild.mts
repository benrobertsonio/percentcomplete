import fetch from 'node-fetch';
import type { Config } from '@netlify/functions';

export default async (req: Request) => {
  try {
    console.log('Received event!');
    const { next_run } = await req.json();

    console.log('Received event! Next invocation at:', next_run);

    fetch('https://api.netlify.com/build_hooks/65fae5a0f7d08915aeeb9a2d', {
      method: 'POST'
    }).then(() => {
        console.log('Triggered rebuild');
        });
    } catch (error) {
        console.error('Error:', error);
    }
};

export const config: Config = {
  schedule: '@daily',
};