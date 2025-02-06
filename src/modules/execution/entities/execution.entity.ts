import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Workflow } from '../../workflow/entites/workflow.entity';

export enum ExecutionStatus {
  RUNNING = 'running',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

@Schema({ timestamps: true }) // Adds createdAt and updatedAt fields
export class Execution extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ type: Types.ObjectId, ref: 'Workflow', required: true })
  workflowId: Workflow;

  @Prop({ required: true, enum: ExecutionStatus, default: ExecutionStatus.RUNNING })
  status: ExecutionStatus;

  @Prop({ default: Date.now })
  startedAt: Date;

  @Prop()
  completedAt?: Date; // Set when execution completes

  @Prop({ type: Object, default: {} })
  inputData: Record<string, any>; // Stores input data for execution

  @Prop({ type: Object, default: {} })
  outputData: Record<string, any>; // Stores final output of workflow
}

export const ExecutionSchema = SchemaFactory.createForClass(Execution);
