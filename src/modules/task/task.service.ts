import { Injectable } from '@nestjs/common';
import { taskQueue } from '../../config/queue.config';
import { TaskExecutionStatus } from './entities/taskExecution.entity';

@Injectable()
export class TaskService {
  async addTaskToQueue(taskExecutionId: string, taskData: any) {
    await taskQueue.add('process-task', { taskExecutionId, taskData });
  }
}
