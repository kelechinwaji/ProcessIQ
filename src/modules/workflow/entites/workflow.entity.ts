import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../../user/entities/user.entity';

export enum WorkflowStatus {
  ACTIVE = 'active',
  PAUSED = 'paused',
  COMPLETED = 'completed',
}

@Schema({ timestamps: true }) // Adds createdAt and updatedAt fields
export class Workflow extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  user: User;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop({
    required: true,
    enum: WorkflowStatus,
    default: WorkflowStatus.ACTIVE,
  })
  status: WorkflowStatus;
}

export const WorkflowSchema = SchemaFactory.createForClass(Workflow);
