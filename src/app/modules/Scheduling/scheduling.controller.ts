import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { classScheduleService } from './scheduling.service';

const createSchedule = catchAsync(async (req, res) => {
    const result = await classScheduleService.createSchedule(req.body);


    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'Schedule created successfully',
        data: result,
    });
});

const getAllSchedules = catchAsync(async (req, res) => {
    const result = await classScheduleService.getAllSchedules();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Schedules fetched successfully',
        data: result,
    });
});

const updateSchedule = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await classScheduleService.updateSchedule(id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Schedule updated successfully',
        data: result,
    });
});

const deleteSchedule = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await classScheduleService.deleteSchedule(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Schedule deleted successfully',
        data: result,
    });
});


export const ScheduleControll = {
    createSchedule,
    getAllSchedules,
    updateSchedule,
    deleteSchedule
}