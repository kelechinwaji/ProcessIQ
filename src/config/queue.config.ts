import { Queue, Worker } from 'bullmq';

export const redisConfig = {
  connection: {
    host: 'localhost',
    port: 6379,
  },
};

export const taskQueue = new Queue('task-queue', redisConfig);
