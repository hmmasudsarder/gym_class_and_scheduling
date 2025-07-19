import { IClassSchedule } from "./scheduling.interface";
import Schedule from "./scheduling.model";


// Create Schedule
const createSchedule = async (payload: {
    date: string;
    startTime: string;
    trainer: string;
}) => {
    const existingSchedules = await Schedule.find({ date: payload.date });

    if (existingSchedules.length >= 5) {
        throw new Error('Maximum 5 Classes can be Scheduled Per day');
    }

    const start = payload.startTime;
    const endHour = parseInt(start.split(':')[0]) + 2;
    const end = `${endHour.toString().padStart(2, '0')}:${start.split(':')[1]}`;

    const newSchedule = await Schedule.create({
        date: payload.date,
        startTime: start,
        endTime: end,
        trainer: payload.trainer,
    });

    return newSchedule;
};


// Get All Schedules
const getAllSchedules = async () => {
    const result = await Schedule.find()
    return result
};

// Update Schedule
const updateSchedule = async (id: string, data: Partial<IClassSchedule>) => {
    const result = await Schedule.findByIdAndUpdate(id, data, { new: true });
    return result
};

// Delete Schedule
const deleteSchedule = async (id: string) => {
    const result = await Schedule.findByIdAndDelete(id);
    return result
};


export const classScheduleService = {
    createSchedule,
    getAllSchedules,
    updateSchedule,
    deleteSchedule
}