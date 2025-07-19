// routes/classSchedule.route.ts
import express from 'express';

import auth from '../../middlewares/auth';
import { classScheduleControll } from './scheduling.controller';


const classSchedulrouter = express.Router();

classSchedulrouter.post('/create', auth("ADMIN"), classScheduleControll.createSchedule);
classSchedulrouter.get('/', classScheduleControll.getAllSchedules);
classSchedulrouter.patch('/:id', auth('ADMIN'), classScheduleControll.updateSchedule);
classSchedulrouter.delete('/:id', auth('ADMIN'), classScheduleControll.deleteSchedule);
export default classSchedulrouter;
