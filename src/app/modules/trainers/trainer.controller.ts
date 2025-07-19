import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { trainerService } from './trainer.service';
import sendResponse from '../../utils/sendResponse';

const createTrainerC = catchAsync(async (req, res) => {
    const result = await trainerService.createTrainerS(req.body)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'Trainer created successfully',
        data: result,
    })
})

const getAllTrainers = catchAsync(async (req, res) => {
    const result = await trainerService.getAllTrainersS();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'All trainers fetched successfully',
        data: result,
    });
});


const deletTrainer = catchAsync(async (req, res) => {
    const id = req.params.trainerId
    const result = await trainerService.deletedTrainersS(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Delete Trainer successfully',
        data: result,
    });
});

const getTrainer = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await trainerService.getTrainersS(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Get Trainer successfully',
        data: result,
    });
});

export const trainerController = {
    createTrainerC,
    getAllTrainers,
    deletTrainer,
    getTrainer
};
