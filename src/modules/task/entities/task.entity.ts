import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Workflow } from '../../workflow/entites/workflow.entity';

export enum TaskType {
  EMAIL = 'email',
  HTTP_REQUEST = 'http_request',
  DATABASE_QUERY = 'database_query',
  CUSTOM_FUNCTION = 'custom_function',
}

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

@Schema({ timestamps: true }) // Adds createdAt and updatedAt fields
export class Task extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ type: Types.ObjectId, ref: 'Workflow', required: true })
  workflowId: Workflow;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, enum: TaskType })
  type: TaskType;

  @Prop({ type: Types.ObjectId, ref: 'Task', default: null }) // For sequential execution
  previousTaskId?: Task;

  @Prop({ type: Object, default: {} }) // Stores dynamic configurations
  config: Record<string, any>;

  @Prop({ required: true, enum: TaskStatus, default: TaskStatus.PENDING })
  status: TaskStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
