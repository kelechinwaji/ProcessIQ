import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Workflow } from '../../workflow/entites/workflow.entity';

export enum TriggerType {
  EVENT = 'event',
  SCHEDULE = 'schedule',
  WEBHOOK = 'webhook',
}

@Schema({ timestamps: true }) // Adds createdAt and updatedAt fields
export class Trigger extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ type: Types.ObjectId, ref: 'Workflow', required: true })
  workflowId: Workflow;

  @Prop({ required: true, enum: TriggerType })
  type: TriggerType;

  @Prop({ required: false }) 
  event?: string; // Example: "user_signup", "order_placed" (only for EVENT triggers)

  @Prop({ required: false }) 
  schedule?: string; // Cron expression (only for SCHEDULE triggers)

  @Prop({ required: false }) 
  webhookUrl?: string; // Webhook URL (only for WEBHOOK triggers)
}

export const TriggerSchema = SchemaFactory.createForClass(Trigger);
