import express from 'express';

import auth from '../../middlewares/auth';
import { ScheduleControll } from './scheduling.controller';


const Schedulrouter = express.Router();

Schedulrouter.post('/create', auth("ADMIN"), ScheduleControll.createSchedule);
Schedulrouter.get('/', ScheduleControll.getAllSchedules);
Schedulrouter.patch('/:id', auth('ADMIN'), ScheduleControll.updateSchedule);
Schedulrouter.delete('/:id', auth('ADMIN'), ScheduleControll.deleteSchedule);
export default Schedulrouter;
