import { Router } from 'express';
import userRouter from '../modules/user/user.route';
import authRoute from '../modules/auth/auth.routes';
import trainerRouter from '../modules/trainers/trainer.routes';



const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/trainer',
    route: trainerRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;