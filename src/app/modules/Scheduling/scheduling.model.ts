import { Schema, model } from 'mongoose';
import { IClassSchedule } from './scheduling.interface';


const ScheduleSchema = new Schema<IClassSchedule>({
    date: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

const Schedule = model('ClassSchedule', ScheduleSchema);
export default Schedule;
