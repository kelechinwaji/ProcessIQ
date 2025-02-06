import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Execution } from '../../execution/entities/execution.entity';
import { Task } from './task.entity';

export enum TaskExecutionStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

@Schema({ timestamps: true }) // Adds createdAt and updatedAt fields
export class TaskExecution extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ type: Types.ObjectId, ref: 'Execution', required: true })
  executionId: Execution;

  @Prop({ type: Types.ObjectId, ref: 'Task', required: true })
  taskId: Task;

  @Prop({ required: true, enum: TaskExecutionStatus, default: TaskExecutionStatus.PENDING })
  status: TaskExecutionStatus;

  @Prop({ default: Date.now })
  startedAt: Date;

  @Prop()
  completedAt?: Date; // Set when execution completes

  @Prop({ type: Object, default: {} })
  inputData: Record<string, any>; // Stores input data for task execution

  @Prop({ type: Object, default: {} })
  outputData: Record<string, any>; // Stores result of task execution

  @Prop({ type: String })
  errorMessage?: string; // Stores error details if execution fails
}

export const TaskExecutionSchema = SchemaFactory.createForClass(TaskExecution);
