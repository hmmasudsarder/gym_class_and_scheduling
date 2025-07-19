import httpStatus from 'http-status'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";

export const AppError = (err: any, res: Response) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.message,
        error: err
    })
}